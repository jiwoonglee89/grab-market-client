import logo from "./logo.svg";
import "./App.css";
import MainPageCompoenet from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <switch>
        <Route exact={true} path={"/"}>
          <MainPageCompoenet />
        </Route>
        <Route exact={true} path={"/products/:id"}>
          <ProductPage />
        </Route>
        <Route exact={true} path={"/upload"}>
          <UploadPage />
        </Route>
      </switch>
    </div>
  );
}

export default App;
