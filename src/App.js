import { MainRouter } from "./routes/MainRouter";
import { ChakraProvider } from "@chakra-ui/react";
import Context from "./hooks/Context";

const UIProvider = () => (
  <Context>
    <ChakraProvider>
      <MainRouter />
    </ChakraProvider>
  </Context>
);
function App() {
  return <UIProvider />;
}

export default App;
