import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import logo from "../png/logo.png";
import homeIcon from "../png/home.png";
import leaderboardIcon from "../png/Leadership.png";
import ordersIcon from "../png/shoppingcart.png";
import productsIcon from "../png/product.png";
import salesIcon from "../png/salesreport.png";
import messageIcon from "../png/message.png";
import settingsIcon from "../png/setting.png";
import signOutIcon from "../png/signout.png";

const Sidenav = () => {
  const navItems = [
    "Home",
    "Leaderboard",
    "Orders",
    "Products",
    "Sales Report",
    "Message",
    "Settings",
    "Sign Out",
  ];

  const navIcons = [
    homeIcon,
    leaderboardIcon,
    ordersIcon,
    productsIcon,
    salesIcon,
    messageIcon,
    settingsIcon,
    signOutIcon,
  ];

  return (
    <Box
      style={{
        width: "20%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mt: "12px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "51.77px", height: "46.27px" }}
        />
        <Typography
          sx={{
            marginTop: "8px",
            fontWeight: 500,
            fontSize: "27px",
            color: "#151D48",
          }}
        >
          Kaveri Hospital
        </Typography>
      </Box>

      <Box sx={{ mt: "30px" }}>
        {navItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              mt: "10px",
              cursor: "pointer",
              color: "#151D48",
              padding: "10px 20px",
              borderRadius: "8px",
              ml: "50px",
              width: "50%",
              backgroundColor: index === 0 ? "#F3941E" : "transparent",
              gap:1.2
            }}
          >
            <img
              src={navIcons[index]}
              alt={`${item} icon`}
              style={{
                width: "24px",
                height: "24px",
                marginRight: "12px",
              }}
            />

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "100",
                lineHeight: "24px",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidenav;
