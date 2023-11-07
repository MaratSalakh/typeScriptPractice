import { Container, Grid } from "@mui/material"
import MediaCard from "./MediaCard"

function ShowCase() {
  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <MediaCard img='src/assets/1.jpg'></MediaCard>
        </Grid>
        <Grid item xs={3}>
          <MediaCard img='src/assets/1.jpg'></MediaCard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ShowCase;
