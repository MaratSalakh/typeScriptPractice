import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

export default function MyNavBar() {
  return (
    <Box sx={{ mb: 3, flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Link underline='none' color={'inherit'}
            variant="h6" component={RouterLink} to={'/'} sx={{ flexGrow: 1 }}
          >
            Shop
          </Link>
          <Button color='inherit' component={RouterLink} to={'/cart'}>Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}