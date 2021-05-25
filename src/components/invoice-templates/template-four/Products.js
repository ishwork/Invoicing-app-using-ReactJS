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
        <Text
          style={{ flex: 4, marginLeft: 5, fontSize: 10, color: "#0066cc" }}
        >
          Product name
        </Text>
        <Text style={styles.pCol1}>Amount</Text>
        <Text style={styles.pCol1}>Price (€)</Text>
        <Text style={styles.pCol1}>VAT (%)</Text>
        <Text
          style={{
            flex: 1.5,
            textAlign: "right",
            fontSize: 10,
            marginRight: 5,
            color: "#0066cc",
          }}
        >
          Subtotal (€)
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
          <Text style={styles.strong}>Total VAT: € </Text>
          <Text />
          {props.productInfo.products
            ? calcTotalVAT(props.productInfo.products)
            : 0}
        </Text>

        <Text style={styles.total}>
          <Text style={styles.strong}>Total: € </Text>
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
    color: "#0066cc",
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
    color: "#0066cc",
  },
  summary: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  total: {
    marginTop: 5,
    paddingTop: 5,
    marginRight: 5,
    textAlign: "right",
    borderTop: "1 solid grey",
    width: "25%",
    marginLeft: "75%",
    fontSize: 10,
    fontFamily: "Lato Bold",
    color: "#0066cc",
  },
});
