import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

export const BasicTemplate = (props) => {
  // console.log(props.barCode);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Logo</Text>

          {props.companyInfo.logo ? (
            <Image style={styles.logo} src={props.companyInfo.logo} />
          ) : (
            <Text>(no logo)</Text>
          )}

          <Text>Heading</Text>
          <Text>{props.companyInfo.businessId}</Text>

          <Text>Barcode</Text>
          <Image style={styles.image} src={props.barCode} />
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: "200px",
    height: "150px",
  },
  logo: {
    width: "150px",
    height: "150px",
  },
});
