import { Container, Grid } from "@mui/material"
import { useAppSelector } from "../slices/hooks";
import { Product } from "../slices/productsSlice";

const CartShowCase = (props: { MediaCard: (props: { product: Product }) => JSX.Element }) => {
  const { MediaCard } = props;

  const ids = useAppSelector((state) => state.products.ids);
  const entities = useAppSelector((state) => state.products.entities);

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ids.map((id) => {
          const product = entities[id];
          return (
            <Grid item key={id} xs={12} sm={6} md={3}>
              {product.count === 0 ? null : MediaCard({ product })}
            </Grid>
          )
        })}
      </Grid>
    </Container >
  );
}

export default CartShowCase;
