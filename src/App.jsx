import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import AuctionDashboard from "./components/AuctionDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AuctionDashboard />
      <Footer />
    </>
  );
}

export default App;
