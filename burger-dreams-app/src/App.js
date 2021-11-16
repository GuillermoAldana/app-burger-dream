import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import {store, persistor} from './store';
import Menu from './components/menu/nav';
import Home from './pages/homePage';
import Burgers from './pages/burgersPage';
import Login from './pages/loginPage';
import NotFoundPage from "./pages/notFoundPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Theme from './resources/theme/index';
import CartComment from "./components/cart";
import Recomendation from "./components/recomendation";
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Router>
            <Menu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/BurgerList" component={Burgers} />
              <Route path="/login" component={Login} />
              <Route path="/finish" component={CartComment} />
              <Route path="/recomendation" component={Recomendation} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
