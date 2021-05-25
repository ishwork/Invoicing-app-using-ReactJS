import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { calcInvoiceTotal } from "../../../util/Calculator";
import Moment from "moment";

export default function summary(props) {
  return (
    <View wrap={false} style={iStyle.wrapper}>
      <View style={iStyle.sRow1}>
        <View>
          <Text style={iStyle.smallText}>{props.companyInfo.companyName}</Text>
          <Text style={iStyle.smallText}>
            {props.companyInfo.companyAddress}
          </Text>
          <Text style={iStyle.smallText}>
            {props.companyInfo.companyPostalCode}{" "}
            {props.companyInfo.companyCity}
          </Text>
        </View>

        <View>
          <Text style={iStyle.smallText}>Tel: {props.companyInfo.phone}</Text>
          <Text style={iStyle.smallText}>Email: {props.companyInfo.email}</Text>
        </View>

        <View>
          <Text style={iStyle.smallText}>
            Business ID: {props.companyInfo.businessId}
          </Text>
          <Text style={iStyle.smallText}>
            VAT number: {props.companyInfo.companyVATNumber}
          </Text>
        </View>
      </View>
      <View style={iStyle.sRow2}>
        <Text style={iStyle.sRow2Col1}>Beneficiary's account number</Text>
        <View style={iStyle.sRow2Col2}>
          <Text style={iStyle.summaryText}>IBAN</Text>
          <Text> </Text>
          <Text style={iStyle.summaryText}>{props.companyInfo.iban}</Text>
        </View>
        <View style={iStyle.sRow2Col3}>
          <Text style={iStyle.summaryText}>BIC/SWIFT Code</Text>
          <Text> </Text>
          <Text style={iStyle.summaryText}>{props.companyInfo.swiftCode}</Text>
        </View>
      </View>
      <View style={iStyle.sRow3}>
        <Text style={iStyle.sRow3Col1}>Beneficiary's name and address</Text>
        <View style={iStyle.sRow3Col2}>
          <Text style={iStyle.summaryText}>
            {props.companyInfo.companyName}
          </Text>
          <Text style={iStyle.summaryText}>
            {props.companyInfo.companyAddress}
          </Text>
          <Text style={iStyle.summaryText}>
            {props.companyInfo.companyPostalCode}{" "}
            {props.companyInfo.companyCity}
          </Text>
        </View>
        <Text style={iStyle.sRow2Col3}></Text>
      </View>
      <View style={iStyle.sRow4}>
        <Text style={iStyle.sRow4Col1}>Payer's name and address</Text>
        <View style={iStyle.sRow4Col2}>
          <Text style={iStyle.summaryText}>
            {props.customerInfo.customerName}
          </Text>
          <Text style={iStyle.summaryText}>
            {props.customerInfo.customerAddress}
          </Text>
          <Text style={iStyle.summaryText}>
            {props.customerInfo.customerPostalCode}{" "}
            {props.customerInfo.customerCity}
          </Text>
        </View>
        <Text style={iStyle.sRow2Col3}></Text>
      </View>

      <View style={iStyle.sRow5}>
        <Text style={iStyle.sRow4Col1}>Signature</Text>
        <Text style={iStyle.sRow4Col2}>
          --------------------------------------------
        </Text>
        <Text
          style={{ ...iStyle.sRow2Col3, ...{ borderTop: "2 solid black" } }}
        >
          <Text style={iStyle.summaryText}>Ref. No</Text>:{" "}
          {props.companyInfo.referenceNumber}
        </Text>
      </View>

      <View style={iStyle.sRow6}>
        <Text style={iStyle.sRow6Col1}>From account no</Text>
        <Text style={iStyle.sRow6Col2}></Text>
        <View style={iStyle.sRow6Col3}>
          <View>
            <Text style={iStyle.sRow6Col3Col1}>Due date</Text>
            <Text style={iStyle.sRow6Col3Col2}>
              {props.customerInfo.invoiceDueDate !== "" ? (
                <Text>
                  {Moment(props.customerInfo.invoiceDueDate).format(
                    "DD.MM.YYYY"
                  )}
                </Text>
              ) : (
                <Text />
              )}
            </Text>
          </View>
          <View>
            <Text style={iStyle.sRow6Col3Col3}>Euro</Text>
            <Text style={iStyle.sRow6Col3Col4}>
              {props.productInfo.products
                ? calcInvoiceTotal(props.productInfo.products)
                : 0}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const iStyle = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    fontSize: 11,
  },
  sRow1: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    borderTop: "2 solid black",
    borderBottom: "2 dashed grey",
  },
  sRow2: {
    flexDirection: "row",
    borderBottom: "2 solid black",
  },
  sRow2Col1: {
    flex: 1,
    fontSize: 8,
    textAlign: "right",
    padding: 5,
    borderRight: "2 solid black",
    height: 60,
  },
  sRow2Col2: {
    flex: 4,
    padding: 5,
    borderRight: "2 solid black",
  },
  sRow2Col3: {
    flex: 4,
    padding: 5,
  },

  sRow3: {
    flexDirection: "row",
  },
  sRow3Col1: {
    flex: 1,
    fontSize: 8,
    textAlign: "right",
    padding: 5,
    borderRight: "2 solid black",
    borderBottom: "2 solid black",
  },
  sRow3Col2: {
    flex: 4,
    padding: 5,
    borderRight: "2 solid black",
    borderBottom: "2 solid black",
  },

  sRow4: {
    flexDirection: "row",
    height: 70,
  },
  sRow4Col1: {
    flex: 1,
    fontSize: 8,
    textAlign: "right",
    padding: 6,
  },
  sRow4Col2: {
    flex: 4,
    padding: 5,
    borderRight: "2 solid black",
  },

  sRow5: {
    flexDirection: "row",
    borderBottom: "2 solid black",
  },

  sRow6: {
    flexDirection: "row",
    borderBottom: "2 solid black",
  },
  sRow6Col1: {
    flex: 1,
    fontSize: 8,
    textAlign: "right",
    padding: 5,
    borderRight: "2 solid black",
  },
  sRow6Col2: {
    flex: 4,
    borderRight: "2 solid black",
  },
  sRow6Col3: {
    flex: 4,
    flexDirection: "row",
  },
  sRow6Col3Col1: {
    fontSize: 8,
    padding: 3,
  },
  sRow6Col3Col2: {
    padding: 3,
  },
  sRow6Col3Col3: {
    borderLeft: "2 solid black",
    fontSize: 8,
    padding: 3,
  },
  sRow6Col3Col4: {
    borderLeft: "2 solid black",
    padding: 3,
    fontSize: 12,
  },
  HeadingText: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    font: "semisolid",
  },

  smallText: {
    fontSize: 8,
    margin: "1 0",
  },

  summaryText: {
    fontSize: 10,
    margin: "1 0",
  },
});
