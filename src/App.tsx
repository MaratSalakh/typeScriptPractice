import AppBarMy from './components/NavBar'
import ShowCase from './components/ShowCase'
import { createTheme, ThemeProvider } from '@mui/material';

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
      <AppBarMy></AppBarMy>
      <ShowCase></ShowCase>
    </ThemeProvider>
  );
};

export default App;
