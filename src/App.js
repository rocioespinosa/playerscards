import CardHolder from "./components/cardHolder";
import "./App.css";
import WebTitle from "./components/webTitle";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app-container">
      <div className="app-webTitle">
        {" "}
        <WebTitle />
      </div>
      <div className="app-cardHolder">
        {" "}
        <CardHolder />
      </div>
      <div className="app-footer">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
