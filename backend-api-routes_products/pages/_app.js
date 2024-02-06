import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An Error occurred...");
    error.info = await res.json();
    error.message = res.message;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
