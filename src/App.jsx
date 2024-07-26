import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-theme";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider /> */}
      {/* <LightDarkMode /> */}
      <ScrollIndicator url="https://dummyapi.online/api/movies" />
    </div>
  );
}

export default App;
