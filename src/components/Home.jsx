import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import { AccountBoxTwoToneIcon } from "@mui/icons-material";
import Login from "./Login";

const Home = () => {
  return(
    <div>
      <h2>Home Page of Job Book App</h2>
      <div>
            <Link className="link" to="/login">
              {/* <AccountBoxTwoToneIcon fontSize={"large"} /> */}
              <Button sx={{ textTransform: "none" }}>Login</Button>
            </Link>

      </div>

    </div>
  );
};

export default Home;