import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import GraduationImage from "../../assets/graduation.svg";
import moment from "moment";

function Result({ latestSubmission }) {
  return (
    <Card sx={{ margin: "3rem" }}>
      <CardMedia
        component="img"
        height="140"
        image={GraduationImage}
        style={{ backgroundColor: "orange" }}
      />
      <CardContent style={{ padding: "2rem" }}>
        <Typography gutterBottom variant="h5" style={{ fontWeight: "bold" }}>
          {`Completed on ${moment(latestSubmission).format('do MMMM YYYY')}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Well done on completing the test you can view the results now.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={(e) => e.preventDefault()}
          style={{
            backgroundColor: `orange`,
            color: "white",
            marginLeft: "1rem",
            marginBottom: "2rem",
          }}
        >
          See results
        </Button>
      </CardActions>
    </Card>
  );
}

export default Result;
