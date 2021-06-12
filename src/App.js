import "./App.css";

import { Route, Switch } from "react-router-dom";
import mainpage from "./pages/mainpage";
import accountpage from "./pages/accountpage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={mainpage} />
        <Route path="/user/:userId" component={accountpage} />
      </Switch>
    </div>
  );
}

export default App;
