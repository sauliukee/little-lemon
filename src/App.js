import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./index.css";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
