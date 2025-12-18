import "../styles/globals.css";
import { Crimson_Text } from "@next/font/google";

const cabinSketch = Crimson_Text({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={cabinSketch.className}>
      <Component {...pageProps} />;
    </main>
  );
}
