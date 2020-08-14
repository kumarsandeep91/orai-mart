import "../styles/globals.css";
import { Provider as StyletronProvider } from "styletron-react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { styletron, debug } from "../styletron";

function MyApp({ Component, pageProps }) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['"Poppins"', "sans-serif"].join(","),
    },
    palette: {
      primary: { light: "#63c691", main: "#2e9563", dark: "#006638" },
      secondary: { light: "#ff8158", main: "#e04f2c", dark: "#a71700" },
    },
  });

  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyletronProvider>
  );
}

export default MyApp;
