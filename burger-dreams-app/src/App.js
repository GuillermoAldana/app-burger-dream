import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Menu from './pages/menu/menu';

function App() {
  return (
    <ChakraProvider>
      <Menu></Menu>
    </ChakraProvider>
    
  );
}

export default App;
