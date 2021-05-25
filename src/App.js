import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./authentication/signup";
import Tog from "./authentication/toggle";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import YouTubePage from "./pages/YouTubePage";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Reset from "./authentication/PasswordReset";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import SelectTemplate from "./components/SelectTemplate";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import CopyrightIcon from "@material-ui/icons/Copyright";
import React, { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import image from "./images/hive-logo.png";
import Fire from "./firestore/Fire";

export default function App() {
  const styles = useStyles();

  const [user, setUser] = useState(null);

  const loadUser = async () => {
    await Fire.auth().onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const { uid, email } = currentUser;
        const cUser = { userId: uid, email: email };
        setUser(cUser);
      }
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSignOut = async () => {
    setUser(null);
    await Fire.auth().signOut();
  };

  return (
    <Router>
      <ScrollToTop />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={styles.appBar}
      >
        <Toolbar className={styles.toolbar}>
          <div className={styles.img}>
            <Link to="/">
              <img src={image} className={styles.img2} />
            </Link>
          </div>
          <Typography className={styles.toolbarTitle}>FRINVOICE</Typography>

          <nav>
            <>
              {user == null ? (
                <>
                  <Link
                    variant="button"
                    color="textPrimary"
                    to="/"
                    className={styles.link}
                  >
                    Home
                  </Link>

                  <Link
                    variant="button"
                    color="textPrimary"
                    to="/about"
                    className={styles.link}
                  >
                    About
                  </Link>

                  <Link
                    variant="button"
                    color="textPrimary"
                    to="/login"
                    className={styles.link}
                  >
                    Login
                  </Link>

                  <Link
                    variant="button"
                    color="textPrimary"
                    to="/register"
                    className={styles.link}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  {user && (
                    <>
                      <Typography
                        style={{
                          color: "#ffa500",
                          fontSize: "16px",
                          fontWeight: "bold",
                          textAlign: "right",
                          marginRight: "10px",
                        }}
                      >
                        {user.email}
                      </Typography>
                    </>
                  )}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Link to="/" className={styles.link}>
                      <HomeIcon style={{ fontSize: 35 }} />
                    </Link>
                    <Link
                      variant="button"
                      color="textPrimary"
                      to="/dashboard"
                      className={styles.link}
                    >
                      Dashboard
                    </Link>

                    <Link
                      variant="button"
                      color="textPrimary"
                      to="/invoices"
                      className={styles.link}
                    >
                      Invoices
                    </Link>

                    <Link
                      variant="button"
                      color="textPrimary"
                      to="/about"
                      className={styles.link}
                    >
                      About
                    </Link>
                    <Link
                      onClick={handleSignOut}
                      to="#"
                      color="textPrimary"
                      className={styles.link}
                    >
                      Logout
                    </Link>
                  </div>
                </>
              )}
            </>
          </nav>
        </Toolbar>
      </AppBar>

      {/* The child layout which matches the route path will be loaded here. */}
      <Container maxWidth="lg" style={{ paddingBottom: "150px" }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sample/:id">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Tog />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
          <Route path="/select-template">
            <SelectTemplate />
          </Route>
          <Route path="/TermsConditions">
            <TermsConditions />
          </Route>
          <Route path="/Privacy">
            <Privacy />
          </Route>
          <Route path="/YouTubePage">
            <YouTubePage />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/invoices">
            <Invoices />
          </Route>
        </Switch>
      </Container>

      {/* Footer */}
      <Container className={styles.footer}>
        <div className={styles.footerRow1}>
          <div className={styles.footerColumn1}>
            <Typography className={styles.footerTitle}>
              Company Information
            </Typography>
            <Typography className={styles.footerText}>
              Hivemind Oy (Ltd) <br />
              Tykistökatu 4 <br />
              Electrocity Werstas <br />
              20520, Turku <br />
            </Typography>
          </div>

          <div className={styles.footerColumn2}>
            <Typography className={styles.footerTitle}>Contact</Typography>
            <Typography className={styles.footerText}>
              hivemind@hivemind.fi <br />
              +358 400503966 <br />
            </Typography>
            <div className={styles.socialMediaDiv}>
              <div>
                <a
                  style={{ color: "blue" }}
                  href="https://www.facebook.com/hivemindinsights/"
                >
                  <FacebookIcon className={styles.socialMediaIcon} />
                </a>
              </div>
              <div>
                <Link
                  to="/YouTubePage"
                  style={{ color: "red", padding: "10px" }}
                >
                  <YouTubeIcon className={styles.socialMediaIcon} />
                </Link>
              </div>
              <div>
                <div>
                  <a
                    style={{ color: "lightblue" }}
                    href="https://twitter.com/HivemindInsight"
                  >
                    <TwitterIcon className={styles.socialMediaIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerColumn3}>
            <Typography className={styles.footerTitle}>Legal</Typography>
            <Typography className={styles.footerText}>
              <Link to="/Privacy" className={styles.legal}>
                {" "}
                Privacy policy{" "}
              </Link>{" "}
              <br />
              <Link to="/TermsConditions" className={styles.legal}>
                {" "}
                Terms of use{" "}
              </Link>
            </Typography>
          </div>
        </div>

        <div className={styles.footerRowDivider} />

        <div className={styles.footerRow2}>
          <Typography className={styles.footerNote}>
            <CopyrightIcon /> FRINVOICE 2021 | This website is operated and
            maintained by Hivemind Oy (Ltd)
          </Typography>
        </div>
      </Container>
      {/* End of Footer */}
    </Router>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  img: {
    width: "5%",
    margin: theme.spacing(1, 1.5),
  },
  img2: {
    maxWidth: "100%",
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
    backgroundColor: "#f0f8ff",
  },

  toolbarTitle: {
    margin: theme.spacing(1, 1.5),
    flexGrow: 1,
    color: "#ffa500",
    "&:hover": {
      cursor: "default",
    },
    fontSize: "1.9rem",
    fontWeight: "bold",
    paddingBottom: "30px",
    paddingTop: "30px",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#ffa500",
    "&:hover": {
      color: "#778899",
    },
    fontSize: "20px",
    fontWeight: "bold",
  },

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },

  footer: {
    backgroundColor: "#f0f8ff",
    marginBottom: "20px",
    maxWidth: "100%",
  },

  footerRow1: {
    display: "flex",
    width: "100%",
  },

  footerColumn1: {
    width: "30%",
    marginLeft: "5%",
    marginTop: "20px",
  },

  footerColumn2: {
    width: "30%",
    marginTop: "20px",
    //borderRight: "1px solid black",
    //borderLeft: "1px solid black",
  },

  socialMediaDiv: {
    display: "flex",
    justifyContent: "center",
    padding: "5px",
  },

  socialMediaIcon: {
    height: "30px",
    width: "30px",
    "&:hover": {
      color: "green",
    },
  },

  footerColumn3: {
    width: "30%",
    marginTop: "20px",
  },

  footerRow2: {
    width: "100%",
    marginTop: "5px",
    justifyContent: "center",
  },

  footerNote: {
    fontFamily: "Arial",
    fontSize: "18px",
    color: "#ffa500",
    display: "flex",
    paddingTop: "20px",
    paddingBottom: "20px",
    justifyContent: "center",
  },

  footerTitle: {
    fontFamily: "Arial",
    fontSize: "20px",
    textAlign: "center",
    color: "#ffa500",
    fontWeight: "bold",
  },
  legal: {
    color: "#ffa500",
    "&:hover": {
      color: "#778899",
    },
  },

  footerText: {
    fontFamily: "Arial",
    fontSize: "18px",
    textAlign: "center",
    color: "#ffa500",
    overflowWrap: "break-word",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  footerRowDivider: {
    height: "1px",
    width: "90%",
    backgroundColor: "black",
    marginLeft: "5%",
    marginTop: "10px",
    marginBottom: "10px",
  },
}));
