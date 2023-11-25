import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowCasePage from './pages/ShowCasePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111111',
    },
    secondary: {
      main: '#F9DC31'
    },
  }
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='showcase' element={<ShowCasePage />}></Route>
          <Route path='cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
