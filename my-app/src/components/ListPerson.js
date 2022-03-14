import React from "react";
import CardStarWars from "./CardStarWars";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const ListPerson = (props) => {
  const { loading, people } = props;

  return (
    <div>
      {loading ? (
        <div>Loading people...</div>
      ) : (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {people.map((people, idx) => {
              return <CardStarWars people={people} key={people.name} />;
            })}
          </Grid>
        </Container>
      )}
    </div>
  );
};
export default ListPerson;
