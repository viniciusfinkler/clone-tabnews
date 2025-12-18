import "../styles/globals.css";
import { Crimson_Text } from "@next/font/google";

const crimsonText = Crimson_Text({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={crimsonText.className}>
      <Component {...pageProps} />;
    </main>
  );
}
