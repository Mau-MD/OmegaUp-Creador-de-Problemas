import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { useStoreRehydrated } from "easy-peasy";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainWindow from "./components/MainWindow";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import RawArray from "./Pages/RawArray";
import RawMatrix from "./Pages/RawMatrix";
export const App = () => {
  const isRehydrated = useStoreRehydrated();

  return (
    <ChakraProvider theme={theme}>
      {!isRehydrated ? (
        <h1> Loading </h1>
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/array/:lineId">
              <RawArray />
            </Route>
            <Route path="/matrix/:lineId">
              <RawMatrix />
            </Route>
            <Route exact path="/">
              <>
                <Header />
                <MainWindow />
              </>
            </Route>
          </Switch>
        </Router>
      )}
    </ChakraProvider>
  );
};
