import {
  FacebookOutlined,
  Instagram,
  Segment,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Navbar = () => {
  const [anchorE1Nav, setAnchorE1Nav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorE1Nav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorE1Nav(null);
  };
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      m={" 0 2rem 0"}
      justifyContent={"space-between"}
    >
      <Stack sx={{ color: "#513125" }}>
        <Typography variant="h4">
          AIR<span>YOGA</span>
        </Typography>
      </Stack>
      <Stack direction={"row"}>
        <IconButton sx={{ color: "#513125" }}>
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: "#513125" }}>
          <FacebookOutlined />
        </IconButton>
        <IconButton sx={{ color: "#513125" }}>
          <Instagram />
        </IconButton>
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{ color: "#513125" }}
        >
          <Segment />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorE1Nav}
          open={Boolean(anchorE1Nav)}
          onClose={handleCloseNavMenu}
          MenuListProps={{
            "aria-labelledby": "list-button",
          }}
        >
          <Box sx={{ color: "#513125" }}>
            <MenuItem>Home</MenuItem>
            <MenuItem>courses</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Box>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default Navbar;
