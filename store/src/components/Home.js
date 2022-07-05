import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ backgroundColor: "#2a9d8f" }}
      >
        <Button
          variant="contained"
          sx={{ marginTop: 15, backgroundColor: "#e9c46a" }}
          LinkComponent={Link}
          to="/books"
        >
          <Typography variant="h5">View all</Typography>
        </Button>
        <br />
        <br />
        <Typography variant="h4" sx={{ marginBottom: 80, color: "#264653" }}>
          Click to see all the available books!
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
