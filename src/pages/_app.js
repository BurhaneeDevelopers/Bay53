import "@/styles/globals.css";

// Components
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <CTA />
      <Footer />
    </>
  );
}
