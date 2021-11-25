// import { Routes } from "./Utilities/Routes";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./Utilities/Routes";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          exact={route.exact}
          path={route.route}
          element={<route.component location={route.name} />}
          key={index}
        />
      ))}
    </Routes>
  );
}

export default App;
