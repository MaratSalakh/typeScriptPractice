import { Container, Grid } from "@mui/material"
import MediaCard from "./MediaCard"
import { useAppSelector } from "../slices/hooks";

function ShowCase() {
  const ids = useAppSelector((state) => state.products.ids);
  const entities = useAppSelector((state) => state.products.entities);

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ids.map((id) => {
          const product = entities[id];
          return (
            <Grid item xs={12} sm={6} md={3}>
              <MediaCard product={product}></MediaCard>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}

export default ShowCase;
