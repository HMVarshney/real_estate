import React from 'react';
import Homepage from "./pages/homepage/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Listings from "./pages/listings/listings";
import Navbar from "./components/Navbar/Navbar";
import { Suspense } from "react";

const PropertyDetails = React.lazy(() => import("./pages/details/propertyDetails"));

function App() {

  const LazyComponent = ({ children }) => {
    return (
      <Suspense fallback={<div>Loading....</div>}>
        {children}
      </Suspense>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' render={(props) => <Homepage {...props} />} />
        <Route exact path='/listings' render={(props) => <Listings {...props} />} />
        <Route exact path='/details/:pid' render={(props) => <LazyComponent><PropertyDetails {...props} /></LazyComponent>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
