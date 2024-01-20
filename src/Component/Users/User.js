import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const User = ({user}) => {
  return (
    <div  className="user-container">
      <Card sx={{ maxWidth: 345 }} style={{ margin: "10px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <p>
              <span>{user.name.title}</span> <span>{user.name.first}</span>{" "}
              <span>{user.name.last}</span>
            </p>
          }
          subheader={
            <>
              <p>
                Country: <span>{user.location.country}</span>
              </p>
              <p>
                Age: <span>{user.registered.age}</span>
              </p>
            </>
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={user.picture.large}
          alt="Paella dish"
        />
      </Card>
    </div>
  );
};

export default User;
