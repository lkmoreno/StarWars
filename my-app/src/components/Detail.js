import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

const Detail = (props) => {
  const { people, closeModal, movies, planets } = props;
 
  return (
    <>
      <Dialog open={true} onClose={closeModal} maxWidth="md">
        <DialogContent>
          <Typography gutterBottom variant="h5" component="h2">
            {people.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Gender: {people.gender}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Movies participe:
          </Typography>
          {movies.map((m) => (
            <>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                key={m.title}
              >
                - {m.title}, Director: {m.director}
              </Typography>
            </>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Detail;
