import logo from "./logo.svg";
import "./App.css";
import Api from "./Api/Api";
import NoteList from "./components/NoteList";
import { ChakraProvider, Flex, Spacer, Box } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      
      <Box h="100vh" bg="red">
        <Flex color="white">
          <Box bg="gray.500" w="100%" h="100%">
            <NoteList />
          </Box>

        </Flex>
      </Box>
      
    </ChakraProvider>
  );
}

export default App;
