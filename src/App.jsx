import { Box } from "@mui/material";
import Sidenav from "./components/sidenav";
import Mainpage from "./components/mainpage";

function App() {
  return (
    <Box sx={{ height: "100vh", width: "100%", overflowx: "hidden",display:"flex",flexDirection:"row" }}>
      <Sidenav />
      <Mainpage/>
    </Box>
  );
}

export default App;
