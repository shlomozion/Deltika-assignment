import "./App.css";
import Banner from "./UI/Banner";
import Input from "./UI/Input/Input";
import Results from "./UI/Results/Results";
import PropertyDataCtx from "./Context/PropertyDataCtx";

function App() {
  return (
    <div className="app">
      <Banner />
      <div className="input-result-div">
        <PropertyDataCtx>
          <Input />
          <Results />
        </PropertyDataCtx>
      </div>
    </div>
  );
}

export default App;
