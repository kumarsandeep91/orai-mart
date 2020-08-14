import "../styles/globals.css";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}

export default MyApp;
