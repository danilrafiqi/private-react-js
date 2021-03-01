import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./config/Router";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          return <Route path={route.path} exact component={route.component} />;
        })}
        <Route path="*" component={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
