import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import ShopPage from "./pages/shop/shop.component";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
