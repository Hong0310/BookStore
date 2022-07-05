import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#264653" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <CollectionsBookmarkOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Home" LinkComponent={NavLink} to="/" />
            <Tab label="Add Product" LinkComponent={NavLink} to="/add" />
            <Tab label="Books" LinkComponent={NavLink} to="/books" />
            <Tab label="About Us" LinkComponent={NavLink} to="/about" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
