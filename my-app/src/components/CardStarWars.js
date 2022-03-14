import React, { useState, useCallback, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Detail from "./Detail";
import axios from "axios";

const CardStarWars = (props) => {
  const { people } = props;
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [planets, setPlanets] = useState([]);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, [open]);

  const openModal = useCallback(() => {
    people.films.map((film) => {
      getM(film)
    })  
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, [open]);

  useEffect(() => {
    getM()
    return () => {
      setMovies([]);  
    };
}, [people]);

const getM = async (url) =>{
  axios({
    url: url,
  })
    .then((response) => {
      setMovies(r => r.concat(response.data));
   })
    .catch((error) => {
      console.log(error);
    });
 
}

  // const getPlanets = useCallback(() => {
  //   console.log(movies)
  //   for (let i = 0; i < movies.length; i++) {

  //     for (let j = 0; j < movies[i].planets.length; j++) {
  //       axios({
  //         url: movies[i].planets[j],
  //       })
  //         .then((response) => {
  //           setPlanets(planets.push(response.data));
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   }
  //   openModal();
  // }, [movies]);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {people.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={openModal}>
              View Character
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {open && (
        <Detail
          people={people}
          closeModal={closeModal}
          movies={movies}
          planets={planets}
        />
      )}
    </>
  );
};

export default CardStarWars;
