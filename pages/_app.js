import "/globals.css";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"] });

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className={overpass.className}>
      <Component {...pageProps} />
    </div>
  );
}
