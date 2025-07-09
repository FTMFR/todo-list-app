import "../styles/GlobalStyles.scss";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </Provider>
  );
}

export default MyApp;
