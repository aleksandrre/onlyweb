import "./App.css";
import Footer from "./components/Footer";
import FutersSection from "./components/FutersSection";

import Navbar from "./components/Navbar";
import PeopleSection from "./components/PeopleSection";
import Projects from "./components/Projects";
import SubscribeSection from "./components/SubscribeSection";
import VideoSection from "./components/VideoSection";
function App() {
  return (
    <>
      {console.log(window.innerWidth)}
      <Navbar />
      <VideoSection />
      <FutersSection />
      <Projects />
      <PeopleSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default App;
