// import React from "react";
// // import { BrowserRouter as Router, Link } from "react-router-dom";
// import axios from "axios";
// import { Grid, Box, Button, Typography } from "@material-ui/core";

// export default function Login() {
//   const createAccount = () => {
//     axios.get("/users/sign_up");
//   };

//   return (
//     <Grid container>
//       <Grid item xs={12}>
//         <h1 className="header">MusiSpace 2.0</h1>
//       </Grid>
//       <Grid item xs={12} style={{ marginLeft: "33%" }}>
//         <h2>Login</h2>
//       </Grid>
//       <Grid item xs={12} style={{ marginLeft: "33%" }}>
//         <h3>Username</h3>
//       </Grid>
//       <Grid item xs={12} style={{ marginLeft: "33%" }}>
//         <input placeholder="Username"></input>
//       </Grid>
//       <Grid item xs={12} style={{ marginLeft: "33%" }}>
//         <h3>Password</h3>
//       </Grid>
//       <Grid item xs={12} style={{ marginLeft: "33%" }}>
//         <input placeholder="Password"></input>
//       </Grid>
//       <Grid item style={{ marginTop: "2vh", marginLeft: "38%" }}>
//         <Button variant="contained" onClick={() => console.log("Boo")}>
//           Login
//         </Button>
//         <Button onClick={() => createAccount()}>Create Account</Button>
//       </Grid>
//     </Grid>
//   );
// }
