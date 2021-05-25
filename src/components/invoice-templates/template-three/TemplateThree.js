import {
  Document,
  Page,
  Text,
  View,
  Font,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import heading from "./Heading.js";
import product from "./Products.js";
import summary from "./Summary.js";

Font.register({
  family: "Lato",
  src: `/fonts/Lato-Regular.ttf`,
});
Font.register({
  family: "Lato Italic",
  src: `/fonts/Lato-Italic.ttf`,
});
Font.register({
  family: "Lato Bold",
  src: `/fonts/Lato-Bold.ttf`,
});

export const TemplateThree = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {heading(props)}
      {product(props)}
      {summary(props)}

      <View style={styles.horizontal}>
        <Image style={styles.barcode} src={props.barCode} />
        <Text style={styles.consentText}>
          The payment will be cleared for the recipient in accordance with the
          General terms for payment transmission and only on the basis of the
          account number given by the payer.
        </Text>
      </View>

      <Text
        style={styles.pageNumbers}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} / ${totalPages}`
        }
        fixed
      />
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 13,
    backgroundColor: "lightyellow",
  },

  // Elements
  logo: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  barcode: {
    marginTop: 10,
    flex: 5,
    height: 50,
  },
  consentText: {
    fontSize: 8,
    flex: 3,
    padding: 10,
  },
  pageNumbers: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
  },

  // MODIFIERs
  marginTop20: {
    marginTop: 20,
  },
  horizontal: {
    flexDirection: "row",
  },
});
