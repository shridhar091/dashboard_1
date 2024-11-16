import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import serachIcon from "../png/searchIcon.png";
import bellIcon from "../png/bellIcon.png";
import userIcon from "../png/user.png";
import userDetails from "../png/userDetails.png";
import cardicon1 from "../png/cardicon1.png";
import cardicon2 from "../png/cardicon2.png";
import cardicon3 from "../png/cardicon3.png";
import cardicon4 from "../png/cardicon4.png";
import graph from "../png/graph.png";
import topProducts from "../png/topProducts.png"
const Mainpage = () => {
  const rows = Array.from({ length: 10 }, (_, index) => ({
    slNo: index + 1,
    name: "Shashi",
    date: "12-05-45",
    status: "Delivered",
    amount: 300,
  }));

  return (
    <Box sx={{ width: "80%", display: "flex", flexDirection: "column" }}>
      {/* Topbar */}
      <Box sx={{ width: "100%", height: "12%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F9FAFB",
            height: "100%",
          }}
        >
          <Box
            sx={{
              w: "845px",
              mt: "15px",
              alignItems: "center",
              display: "flex",
              justifyContent: "row",
              ml: "40px",
            }}
          >
            <img
              src={serachIcon}
              style={{
                width: "14px",
                height: "14px",
                marginRight: "12px",
              }}
            />
            <Typography sx={{ fontWeight: "10px" }}>Serach here...</Typography>
          </Box>

          <Box
            sx={{
              w: "845px",
              mt: "14px",
              alignItems: "center",
              display: "flex",
              justifyContent: "row",
              gap: 2,
              mr: 2,
            }}
          >
            <img
              src={bellIcon}
              style={{
                width: "38px",
                height: "35px",
              }}
            />
            <img
              src={userIcon}
              style={{
                width: "38px",
                height: "35px",
              }}
            />
            <img
              src={userDetails}
              style={{
                width: "140px",
                height: "35px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Bottom apge */}
      <Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
          <Box
            sx={{
              width: "55%",
              height: "450px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            {/* Order Summary Card */}
            <Card
              sx={{
                width: "100%",
                height: "250px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
              >
                <Typography sx={{ fontWeight: 600 }}>
                  Today Order Summary
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "row", gap: 1 }}>
                  <Typography sx={{ color: "#F3941E", fontWeight: 400 }}>
                    07-Nov-2024
                  </Typography>
                  <Typography
                    sx={{
                      border: "1px solid black",
                      color: "#0F3659",
                      borderRadius: "8px",
                      fontWeight: 400,
                      p: 0.3,
                    }}
                  >
                    Download
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{ mt: 2, display: "flex", justifyContent: "row", gap: 2.5 }}
              >
                <Card
                  sx={{
                    height: "140px",
                    width: "150px",
                    ml: 2,
                    borderRadius: "15px",
                    backgroundColor: "#FFE2E5",
                  }}
                >
                  <img
                    src={cardicon1}
                    style={{
                      width: "40px",
                      height: "40px",
                      padding: "10px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ ml: 2, mt: -0.9, fontWeight: 700 }}
                  >
                    300
                  </Typography>
                  <Typography sx={{ ml: 2, fontSize: "15px" }}>
                    Total Order
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      fontWeight: 400,
                      color: "#4079ED",
                      fontSize: "12px",
                      lineHeight: "1.2",
                    }}
                  >
                    +8% from yesterday
                  </Typography>
                </Card>
                <Card
                  sx={{
                    height: "140px",
                    width: "150px",
                    borderRadius: "15px",
                    backgroundColor: "#FFF4DE",
                  }}
                >
                  <img
                    src={cardicon2}
                    style={{
                      width: "40px",
                      height: "40px",
                      padding: "10px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ ml: 2, mt: -0.9, fontWeight: 700 }}
                  >
                    50
                  </Typography>
                  <Typography sx={{ ml: 2, fontSize: "15px", }}>
                    Approval Pending
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      fontWeight: 400,
                      color: "#4079ED",
                      fontSize: "12px",
                      lineHeight: "1.2",
                    }}
                  >
                    +5% from yesterday
                  </Typography>
                </Card>
                <Card
                  sx={{
                    height: "140px",
                    width: "150px",
                    borderRadius: "15px",
                    backgroundColor: "#DCFCE7",
                  }}
                >
                  <img
                    src={cardicon3}
                    style={{
                      width: "40px",
                      height: "40px",
                      padding: "10px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ ml: 2, mt: -0.9, fontWeight: 700 }}
                  >
                    250
                  </Typography>
                  <Typography sx={{ ml: 2, fontSize: "15px", }}>
                  Total Transaction
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      fontWeight: 400,
                      color: "#4079ED",
                      fontSize: "12px",
                      lineHeight: "1.2",
                    }}
                  >
                    +1,2% from yesterday
                  </Typography>
                </Card>
                <Card
                  sx={{
                    height: "140px",
                    width: "150px",
                    borderRadius: "15px",
                    backgroundColor: "#F3E8FF",
                    mr:2
                  }}
                >
                  <img
                    src={cardicon4}
                    style={{
                      width: "40px",
                      height: "40px",
                      padding: "10px",
                    }}
                  />
                 <Typography
                    variant="h6"
                    sx={{ ml: 2, mt: -0.9, fontWeight: 700 }}
                  >
                    20
                  </Typography>
                  <Typography sx={{ ml: 2, fontSize: "14px",}}>
                  Requests Received
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      fontWeight: 400,
                      color: "#4079ED",
                      fontSize: "12px",
                      lineHeight: "1.2",
                    }}
                  >
                    0,5% from yesterday
                  </Typography>
                </Card>
              </Box>
            </Card>
            {/* Analaytic */}
            <Card
              sx={{
                width: "100%",
                height: "250px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
              >
                <Typography sx={{ fontWeight: 600 }}>Analytics</Typography>
              </Box>
              <Box sx={{ width: "100%", p: 1 }}>
                <img
                  src={graph}
                  style={{
                    width: "100%",
                    height: "120px",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#4079ED",
                    }}
                  />
                  <Typography
                    sx={{ fontSize: "10px", lineHeight: "1", fontWeight: 400 }}
                  >
                    Total order received
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#F3941E",
                    }}
                  />
                  <Typography
                    sx={{ fontSize: "10px", lineHeight: "1", fontWeight: 400 }}
                  >
                    Order approval pending
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>

          {/* Side TAble */}
          <Box
            sx={{
              ml: 5,
              width: "36%",
              height: "500px",
              backgroundColor: "#F7FFFA",
              borderRadius: "8px",
              border: "1px solid #197BBD",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{ fontSize: "10px", lineHeight: "5", fontWeight: 400 }}
              >
                Last 10 transactions
              </Typography>
            </Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ padding: "6px", height: "20px" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "5",
                        fontWeight: 400,
                      }}
                    >
                      Sl No
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ padding: "6px", height: "20px" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "5",
                        fontWeight: 400,
                      }}
                    >
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ padding: "6px", height: "20px" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "5",
                        fontWeight: 400,
                      }}
                    >
                      Date
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ padding: "6px", height: "20px" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "5",
                        fontWeight: 400,
                      }}
                    >
                      Status
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ padding: "6px", height: "20px" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "5",
                        fontWeight: 400,
                      }}
                    >
                      Amount
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        padding: "6px",
                        height: "20px",
                        borderBottom: "none",
                      }}
                    >
                      {row.slNo}
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: "6px",
                        height: "20px",
                        borderBottom: "none",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: "6px",
                        height: "20px",
                        borderBottom: "none",
                      }}
                    >
                      {row.date}
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: "6px",
                        height: "20px",
                        borderBottom: "none",
                      }}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: "6px",
                        height: "20px",
                        borderBottom: "none",
                      }}
                    >
                      {row.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>


        <Box sx={{width:"55%",height:"10px"}}>
            <Card sx={{height: "250px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "15px",mb:5}}>
            <img
              src={topProducts}
              style={{
                width: "100%"
              }}
            />
            </Card>
        
        </Box>
      </Box>
    </Box>
  );
};

export default Mainpage;
