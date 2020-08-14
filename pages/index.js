import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useStyletron } from "styletron-react";

export default function Home() {
  const [css] = useStyletron();
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
              gridGap: "16px",
            })}
          >
            <img className={css({ height: "50px" })} src="/images/logo.jpeg" />
          </div>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "20% 60% 20%",
              width: "100%",
              gridGap: "8px",
              justifyContent: "center",
              alignContent: "center",
            })}
          >
            <div className={css({ height: "30rem", margin: "auto" })}>
              <img
                className={css({ maxHeight: "100%", maxWidth: "100%" })}
                src="/images/clip1.png"
              />
            </div>
            <div>dfsdfddsdsfsddfds</div>
            <div className={css({ height: "30rem", margin: "auto" })}>
              <img
                className={css({ maxHeight: "100%", maxWidth: "100%" })}
                src="/images/clip2.png"
              />
            </div>
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
