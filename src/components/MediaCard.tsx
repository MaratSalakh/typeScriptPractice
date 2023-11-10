import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup } from '@mui/material';
import { Product } from '../assets/productsList';

export default function MediaCard(props: { product: Product, i: number }) {
  const { name, img, count, price } = props.product;
  // сделать onclick и изменение состояния через immutable helper
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="Car"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {count > 0 ? 'Available' : 'Not available'}
        </Typography>
        <Typography variant="body2">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button>+</Button>
          <Button>-</Button>
        </ButtonGroup>
        <Button>5</Button>
      </CardActions>
    </Card>
  );
}
