import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../footer/Footer";

function Contact() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
        }}
      >
        <Typography sx={{ mt: "20px" }} variant="h3">
          Contact Us
        </Typography>
        <Typography variant="p" sx={{ textAlign: "center", p: "10px" }}>
          If you have questions about anything Home Shop - from where is your
          order, to exchanging your fresh threads, head on over to our
          <a href="/">Help Centre</a>.
        </Typography>
        <Typography variant="p" sx={{ textAlign: "center", p: "10px" }}>
          This is where you'll find all the answers you need, you’ll even be
          able to speak to one of our friendly support heroes!
        </Typography>

        <Button variant="contained" disableElevation>
          Contact Support Now
        </Button>
      </Box>
    </>
  );
}

export default Contact;
