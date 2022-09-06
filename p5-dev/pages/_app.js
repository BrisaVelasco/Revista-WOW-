import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import fonts from "../styles/fonts.css";
import { Header } from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Box } from "@chakra-ui/react";
import Router from "next/router";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Header />
      <Box id="Loader" h={1}></Box>
      <NextNProgress
        color="#EB522D"
        options={{ showSpinner: false, parent: "#Loader" }}
      />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
