import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup } from '@mui/material';
import { Product } from '../slices/productsSlice';
import { useAppDispatch } from '../slices/hooks';
import { countPlus, countMinus } from '../slices/productsSlice';

export default function MediaCard(props: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();
  const { id, count, price, img, name } = props.product;
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
          <Button onClick={() => dispatch(countPlus(id))}>+</Button>
          <Button onClick={() => dispatch(countMinus(id))}>-</Button>
        </ButtonGroup>
        <Button>{count}</Button>
        <Button>{count === 0 ? '' : count * price}</Button>
      </CardActions>
    </Card>
  );
}
