import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-theme";
import ScrollIndicator from "./components/scroll-indicator";
import CustomTabs from "./components/custom-tabs/tabs";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url="https://dummyapi.online/api/movies" /> */}
      <CustomTabs />
    </div>
  );
}

export default App;
