import React from "react";
import { Box, Typography } from "@mui/material";
import bannerImage from "../assets/banner.jpg"; 

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundImage: `url(${bannerImage})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ¡La mejor calidad al mejor precio!
      </Typography>
    </Box>
  );
};

export default Banner;
