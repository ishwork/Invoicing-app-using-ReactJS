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
import summary from "./Summary.js";
import product from "./Products.js";

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

export const FinnishTemplate = (props) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {heading(props)}

            {product(props)}

            {summary(props)}

            <View style={styles.horizontal}>
                <Image style={styles.barcode} src={props.barCode} />
                <Text style={styles.consentText}>
                    Maksu välitetään saajalle vain Suomessa Kotimaan
                    maksujenvälityksen yleisten ehtojen mukaisesti ja vain
                    maksajan ilmoittaman tilinumeron perusteella.
                    {"\n"} {"\n"}
                    Betalningen förmedlas till mottagare endast i Finland enligt
                    Allmänna villkor för inrikes betalningsförmedling och endast
                    till det kontonummer betalaren angivit.
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
