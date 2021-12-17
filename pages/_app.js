import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  );
}
