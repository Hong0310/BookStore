import { Box, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        sx={{ background: "#2a9d8f" }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "sans-serif", marginTop: 15, color: "#e9c46a" }}
        >
          This is a CRUD application
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: "sans-serif", marginBottom: 80, color: "#e9c46a" }}
        >
          by MERN stack
        </Typography>
      </Box>
    </div>
  );
};

export default About;
