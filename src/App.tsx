import Lookbook from "./components/Lookbook/Lookbook";
import looksData from "./data/looksData";


import "./styles/lookbook.css";
import "./styles/media-viewer.css";
import "./styles/progress-bar.css";
import './styles/global.css';
import './styles/product-carousel.css';
import './styles/annotations.css';
import './styles/modal.css';

function App() {
  return (
    <div className="App">
      <Lookbook looks={looksData} />
    </div>
  );
}

export default App;
