import { ChakraProvider } from "@chakra-ui/react";
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
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/BurgerList" component={Burgers}/>
          <Route path="/login" component={Login}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
        </Router>
    </ChakraProvider>
  );
};

export default App;
