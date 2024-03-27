import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { FoodContextProvider } from "@/components/context/Context";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <FoodContextProvider>
        <Component {...pageProps} />
      </FoodContextProvider>
    </Layout>
  );
};

export default App;
