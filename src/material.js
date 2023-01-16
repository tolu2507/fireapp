import { Grid } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Authentication } from "./pages/Authentication/Authentication";
import { Database } from "./pages/Database/Database";
import { Functions } from "./pages/Functions/Function";
import { Hosting } from "./pages/Hosting/Hosting";
import { MachineLearning } from "./pages/MachineLearning/MachineLearning";
import { Storage } from "./pages/Storage/Storage";
function MaterialApp() {
  return (
    <BrowserRouter>
      <Grid container spacing={2}>
        <Navbar />
        <Routes>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="storage" element={<Storage />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="functions" element={<Functions />} />
          <Route path="machine-learning" element={<MachineLearning />} />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
}

export default MaterialApp;
