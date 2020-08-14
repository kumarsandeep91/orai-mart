import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useStyletron } from "styletron-react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Home() {
  const [css] = useStyletron();
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={css({ minHeight: "100vh" })}>
      <Head>
        <title>OraiMart-Grocerry Delivered Safely</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          className={css({
            backgroundColor: "#fcc45c",
            minHeight: "100px",
            padding: "16px",
          })}
        >
          <div
            className={css({
              display: "grid",
              justifyContent: "center",
            })}
          >
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "auto auto",
                gridTemplateRows: "auto auto",
                columnGap: "8px",
                justifyContent: "center",
              })}
            >
              <img
                className={css({
                  height: "50px",
                  gridColumn: "1",
                  gridRow: "1/3",
                  alignSelf: "center",
                })}
                src="/images/logo.jpeg"
              />
              <Typography
                className={css({
                  color: theme.palette.secondary.main,
                  fontWeight: "bold",
                })}
                variant="h5"
              >
                Orai Mart
              </Typography>
              <Typography
                className={css({ color: theme.palette.grey[800] })}
                variant="body2"
              >
                Stay Home, Stay Safe
              </Typography>
            </div>
          </div>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "30% 40% 30%",
              width: "100%",
              gridGap: "8px",
              justifyContent: "center",
              alignContent: "center",
            })}
          >
            <img
              className={css({
                maxHeight: "30rem",
                maxWidth: "100%",
                justifySelf: "end",
                alignSelf: "center",
              })}
              src="/images/clip1.png"
            />
            <div
              className={css({
                display: "grid",
                alignContent: "center",
                justifyContent: "center",
                textAlign: "center",
              })}
            >
              <h1
                className={css({
                  margin: "4px 0px",
                  fontWeight: "bold",
                  fontSize: "3rem",
                })}
              >
                Stay Home - We'll Deliver
              </h1>
              <p className={css({ margin: "4px 0px" })}>
                Get your groceries delivered in less than an hour
              </p>

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<LocationOnIcon />}
              >
                Serving in Orai
              </Button>
            </div>
            <img
              className={css({
                maxHeight: "30rem",
                maxWidth: "100%",
                justifySelf: "start",
                alignSelf: "center",
              })}
              src="/images/clip2.png"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
