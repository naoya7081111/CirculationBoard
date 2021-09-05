import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;


// 参考：https://reffect.co.jp/react/front-react-back-node#Express