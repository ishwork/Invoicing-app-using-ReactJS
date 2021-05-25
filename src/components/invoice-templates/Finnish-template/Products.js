import { Text, View, StyleSheet } from "@react-pdf/renderer";
import {
    calcInvoiceTotal,
    calcTotalVAT,
    calcTotalBeforeDiscount,
    discountAmount,
} from "../../../util/Calculator";

export default function product(props) {
    return (
        <View style={styles.marginTop20}>
            <View style={styles.pRowHead}>
                <Text style={{ flex: 4, marginLeft: 5 }}>Selite</Text>
                <Text style={styles.pCol1}>Määrä</Text>
                <Text style={styles.pCol1}>à-hinta (€)</Text>
                <Text style={styles.pCol1}>ALV (%)</Text>
                <Text style={{ flex: 1.5, textAlign: "right", marginRight: 5 }}>
                    Yhteensä (€)
                </Text>
            </View>

            {props.productInfo.products ? (
                props.productInfo.products.map((item, index) => {
                    return (
                        <View style={styles.pRow} key={index}>
                            <Text style={{ flex: 4, fontSize: 10, marginLeft: 10 }}>
                                {item.ItemName}
                            </Text>
                            <Text style={styles.pCol1}>{item.Amount}</Text>
                            <Text style={styles.pCol1}>{item.Price}</Text>
                            <Text style={styles.pCol1}>{item.VAT}%</Text>

                            <View style={{ flex: 1.5, textAlign: "right", marginRight: 5 }}>
                                <Text style={{ flex: 1, textAlign: "right", fontSize: 10 }}>
                                    {calcTotalBeforeDiscount(item)}
                                </Text>
                                {item.Discount && item.Discount !== 0 ? (
                                    <Text style={{ flex: 1, textAlign: "right", fontSize: 10 }}>
                                        - € {discountAmount(item)}
                                    </Text>
                                ) : (
                                    <Text />
                                )}
                            </View>
                        </View>
                    );
                })
            ) : (
                <Text>No product</Text>
            )}

            <View style={styles.summary}>
                <Text style={styles.total}>
                    <Text style={styles.strong}>Verot yhteensä: € </Text>
                    <Text />
                    {props.productInfo.products
                        ? calcTotalVAT(props.productInfo.products)
                        : 0}
                </Text>

                <Text style={styles.total}>
                    <Text style={styles.strong}>Yhteensä: € </Text>
                    <Text />
                    {props.productInfo.products
                        ? calcInvoiceTotal(props.productInfo.products)
                        : 0}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pCol1: {
        flex: 1,
        textAlign: "center",
        fontSize: 10,
        paddingBottom: 5,
    },
    pRowHead: {
        flexDirection: "row",
        margin: "5 0",
        fontFamily: "Lato Bold",
        borderBottom: "1 solid grey",
        fontSize: 10,
    },
    pRow: {
        flexDirection: "row",
        margin: "5 0",
    },
    marginTop20: {
        marginTop: 20,
    },
    strong: {
        fontFamily: "Lato Bold",
        fontSize: 10,
        margin: "3 0",
    },
    summary: {
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    total: {
        marginTop: 5,
        marginRight: 5,
        paddingTop: 5,
        textAlign: "right",
        borderTop: "1 solid grey",
        width: "25%",
        marginLeft: "75%",
        fontFamily: "Lato Bold",
        fontSize: 10,
    },
});
