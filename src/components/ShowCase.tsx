import { Container, Grid } from "@mui/material"
import MediaCard from "./MediaCard"
import { Product } from "../assets/productsList";

function ShowCase(props: { products: Product[] }) {
  const { products, setProducts } = props;

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product: Product, i: number) => (
          <Grid item xs={12} sm={6} md={3}>
            <MediaCard product={product} i={i}></MediaCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ShowCase;
