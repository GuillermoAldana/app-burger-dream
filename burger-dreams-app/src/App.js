import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import store from './store';
import Menu from './components/menu/nav';
import Home from './pages/homePage';
import Burgers from './pages/burgersPage';
import Login from './pages/loginPage';
import NotFoundPage from "./pages/notFoundPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Theme from './resources/theme/index';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Provider store={store}>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/BurgerList" component={Burgers} />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
