import { ChakraProvider } from "@chakra-ui/react";
import Menu from './pages/menu/nav';
import Home from './pages/home/index';
import Burgers from './pages/burgers/index';
import Login from './pages/login/index';
import NotFoundPage from "./pages/home/notFoundPage";
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
          <Route path="/burgerList" component={Burgers}/>
          <Route path="/login" component={Login}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
        </Router>
    </ChakraProvider>
  );
};

export default App;
