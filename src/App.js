import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SecondContent from "./components/SecondContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SecondContent />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
