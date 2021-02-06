import HomePage from "./pages/home-page/HomePage";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import ShopPage from "./pages/shop-page/ShopPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
