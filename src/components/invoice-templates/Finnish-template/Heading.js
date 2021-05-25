import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import Moment from "moment";

export default function heading(props) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.headRow1}>
                <View style={styles.headRow1Col1}>
                    {props.companyInfo.logo !== "" ? (
                        <Image style={styles.logo} src={props.companyInfo.logo} />
                    ) : (
                        <Text>Yrityksen Logo</Text>
                    )}
                </View>
                <View style={styles.headRow1Col2}>
                    <Text style={styles.HeadingText}>LASKU</Text>
                    <Text style={{ height: "5px" }}> </Text>
                    <Text style={styles.smallText}>
                        Laskun numero : {props.customerInfo.invoiceNumber}
                    </Text>

                    <Text style={styles.smallText}>
                        Päiväys :{" "}
                        {props.customerInfo.invoiceDate !== "" ? (
                            <Text>
                                {Moment(props.customerInfo.invoiceDate).format("DD.MM.YYYY")}
                            </Text>
                        ) : (
                            <Text />
                        )}
                    </Text>

                    <Text style={styles.smallText}>
                        Eräpäivä :{" "}
                        {props.customerInfo.invoiceDueDate !== "" ? (
                            <Text>
                                {Moment(props.customerInfo.invoiceDueDate).format("DD.MM.YYYY")}
                            </Text>
                        ) : (
                            <Text />
                        )}
                    </Text>
                </View>
            </View>

            <View style={styles.headRow2}>
                <View style={styles.headRow2Col1}>
                    <Text style={styles.HeadingText}>
                        {props.customerInfo.customerName}
                    </Text>
                    {props.customerInfo.customerBusinessId !== "" ? (
                        <Text style={styles.smallText}>
                            Y-tunnus {props.customerInfo.customerBusinessId}
                        </Text>
                    ) : (
                        <Text />
                    )}
                    <Text style={styles.smallText}>
                        {props.customerInfo.customerAddress}
                    </Text>
                    <Text style={styles.smallText}>
                        {props.customerInfo.customerPostalCode}{" "}
                        {props.customerInfo.customerCity}
                    </Text>
                </View>
                <Text> </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        fontSize: 12,
    },

    //Company logo and invoicer details
    headRow1: {
        flexDirection: "row",
        width: "100%",
    },

    headRow1Col1: {
        width: "32%",
        marginLeft: "2%",
    },

    headRow1Col2: {
        width: "64%",
        textAlign: "right",
        marginRight: "2%",
    },

    //payer details and invoice details
    headRow2: {
        flexDirection: "row",
        width: "100%",
        marginTop: "5px",
    },
    headRow2Col1: {
        width: "50%",
        marginLeft: "3%",
    },

    invoiceTitle: {
        fontSize: 25,
        fontFamily: "Lato Bold",
    },

    rowDivider: {
        width: "100%",
        height: "2px",
        backgroundColor: "darkgrey",
    },
    // Elements
    logo: {
        width: 70,
        height: 70,
        marginRight: 5,
    },

    HeadingText: {
        fontSize: 12,
        fontFamily: "Lato Bold",
        font: "semisolid",
    },

    smallText: {
        fontSize: 10,
        margin: "3 0",
    },
});
