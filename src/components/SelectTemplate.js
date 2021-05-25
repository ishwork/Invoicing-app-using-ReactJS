import { Button, Card, Container, Icon, makeStyles, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { BasicTemplate } from "./invoice-templates/basic/BasicTemplate";
import {FinnishTemplate} from "./invoice-templates/Finnish-template/FinnishTemplate";
import { TemplateThree } from "./invoice-templates/template-three/TemplateThree";
import { TemplateFour } from "./invoice-templates/template-four/TemplateFour";
import { useBarcode } from "@createnextapp/react-barcode";
import { useEffect, useState } from "react";
import imgTemplate1 from "../images/template-1.png";
import imgTemplate2 from "../images/template-2.png";
import imgTemplate3 from "../images/template-3.png";
import imgTemplate4 from "../images/template-4.png";

export default function SelectTemplate() {
  const styles = useStyles();
  const companyInfo = useSelector((state) => state.companyInformation);
  const customerInfo = useSelector((state) => state.customerInformation);
  const productInfo = useSelector((state) => state.productInformation);

  const [template, setTemplate] = useState(0);

  // having avariable to store the selected template, which is changed by click event, preserve with refresh
  // on hover: change CSS style

  const { inputRef } = useBarcode({
    value: customerInfo.invoiceNumber
      ? "FRINVOICE: " + customerInfo.invoiceNumber
      : "Missing Invoice Number",
    options: {
      displayValue: false,
    },
  });

  const [barCodeBase64, setBarCodeBase64] = useState("");

  useEffect(() => {
    setBarCodeBase64(inputRef.current.src);
  }, [inputRef]);

  return (
    <Container>
      <Typography variant="h5" style={{ textAlign: "center", color: "black", fontWeight: "bold", marginTop: 20 }}>
        Select a template and export to PDF
      </Typography>
      <Container className={styles.wrapper}>
        {[imgTemplate1, imgTemplate2, imgTemplate3, imgTemplate4].map(
          (tpl, index) => (
            <Card
              raised={index === template}
              className={styles.myCard}
              onClick={() => setTemplate(index)}
            >
              <CardMedia
                component="img"
                alt={"Template " + (index + 1)}
                image={tpl}
              />
            </Card>
          )
        )}
      </Container>

      <img ref={inputRef} className={styles.hidden} alt="bar code" />

      <Container className={styles.invoiceNavigation}>
        {barCodeBase64 !== "" ? (
          <Container>
            {createBasicTemplate()}
            {createFinnishTemplate()}
            {createTemplateThree()}
            {createTemplateFour()}

          </Container>
        ) : (
          ""
        )}
      </Container>
    </Container>
  );

  function createBasicTemplate() {
    return template === 0 ? (
      <PDFDownloadLink
        className={template !== 0 ? styles.hidden : ""}
        document={
          <BasicTemplate
            barCode={barCodeBase64}
            companyInfo={companyInfo}
            customerInfo={customerInfo}
            productInfo={productInfo}
          />
        }
        fileName={companyInfo.businessId + ".pdf"}
      >
        {({ blob, url, loading, error }) => (
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            endIcon={<Icon>print</Icon>}
            href={url}
            target="_blank"
          >
            {loading ? "PROCESSING ..." : "EXPORT TO PDF"}
          </Button>
        )}
      </PDFDownloadLink>
    ) : (
      ""
    );
  }

    function createFinnishTemplate() {
        return template === 1 ? (
            <PDFDownloadLink
                className={template !== 1 ? styles.hidden : ""}
                document={
                    <FinnishTemplate
                        barCode={barCodeBase64}
                        companyInfo={companyInfo}
                        customerInfo={customerInfo}
                        productInfo={productInfo}
                    />
                }
                fileName={companyInfo.businessId + ".pdf"}
            >
                {({ blob, url, loading, error }) => (
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.button}
                        endIcon={<Icon>print</Icon>}
                        href={url}
                        target="_blank"
                    >
                        {loading ? "PROCESSING ..." : "EXPORT TO PDF"}
                    </Button>
                )}
            </PDFDownloadLink>
        ) : (
            ""
        );
    }

  function createTemplateThree() {
    return template === 2 ? (
      <PDFDownloadLink
        className={template !== 2 ? styles.hidden : ""}
        document={
          <TemplateThree
            barCode={barCodeBase64}
            companyInfo={companyInfo}
            customerInfo={customerInfo}
            productInfo={productInfo}
          />
        }
        fileName={companyInfo.businessId + ".pdf"}
      >
        {({ blob, url, loading, error }) => (
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            endIcon={<Icon>print</Icon>}
            href={url}
            target="_blank"
          >
            {loading ? "PROCESSING ..." : "EXPORT TO PDF"}
          </Button>
        )}
      </PDFDownloadLink>
    ) : (
      ""
    );
  }

  function createTemplateFour() {
    return template === 3 ? (
      <PDFDownloadLink
        className={template !== 3 ? styles.hidden : ""}
        document={
          <TemplateFour
            barCode={barCodeBase64}
            companyInfo={companyInfo}
            customerInfo={customerInfo}
            productInfo={productInfo}
          />
        }
        fileName={companyInfo.businessId + ".pdf"}
      >
        {({ blob, url, loading, error }) => (
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            endIcon={<Icon>print</Icon>}
            href={url}
            target="_blank"
          >
            {loading ? "PROCESSING ..." : "EXPORT TO PDF"}
          </Button>
        )}
      </PDFDownloadLink>
    ) : (
      ""
    );
  }
}

const useStyles = makeStyles((theme) => ({
  invoiceNavigation: {
    textAlign: "right",
  },
  button: {
    fontSize: "1.1rem",
    margin: theme.spacing(2),
    backgroundColor: "#ffa500",
    "&:hover": {
      backgroundColor: "#b5651d",
    },
  },
  hidden: {
    display: "none",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: 800,
    padding: "2rem",
    flexWrap: "wrap",
  },
  myCard: {
    boxSizing: "border-box",
    cursor: "pointer",
    maxWidth: 300,
    margin: "1.5rem",
    "&:hover": {
      border: "1px solid #ff665b",
    },
  },
}));
