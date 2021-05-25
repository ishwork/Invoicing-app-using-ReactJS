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
        <Text style={{ flex: 4, marginLeft: 5, fontSize: 10, paddingTop: 2 }}>
          Product name
        </Text>
        <Text style={styles.pCol1}>Amount</Text>
        <Text style={styles.pCol1}>Price</Text>
        <Text style={styles.pCol1}>VAT</Text>
        <Text
          style={{
            flex: 1.5,
            textAlign: "right",
            fontSize: 10,
            marginRight: 5,
            paddingTop: 2,
          }}
        >
          Subtotal (€)
        </Text>
      </View>

      {props.productInfo.products ? (
        props.productInfo.products.map((item, index) => {
          return (
            <View style={styles.pRow} key={index}>
              <Text style={{ flex: 4, marginLeft: 10, fontSize: 10 }}>
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
        <Text style={{ marginLeft: 5 }}>No product</Text>
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
          <Text></Text>
          {props.productInfo.products
            ? calcInvoiceTotal(props.productInfo.products)
            : 0}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  marginTop20: {
    backgroundColor: "lightyellow",
  },
  pCol1: {
    flex: 1,
    textAlign: "center",
    paddingTop: "2px",
    width: "100%",
    height: "20px",
    fontSize: 10,
  },
  pRowHead: {
    flexDirection: "row",
    margin: "5 0",
    fontFamily: "Lato Bold",
    borderBottom: "1 solid grey",
    borderTop: "1 solid grey",
    backgroundColor: "lightblue",
  },
  pRow: {
    flexDirection: "row",
    margin: "5 0",
    backgroundColor: "lightyellow",
  },

  strong: {
    fontFamily: "Lato Bold",
    fontSize: 10,
    margin: "3 0",
  },
  summary: {
    flexDirection: "column",
    justifyContent: "flex-end",
    marginRight: "5px",
  },
  total: {
    paddingTop: 5,
    textAlign: "right",
    borderTop: "1 solid lightblue",
    width: "25%",
    height: "25px",
    marginLeft: "75%",
    fontFamily: "Lato Bold",
    fontSize: 10,
  },
});
