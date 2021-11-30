import express from "express";

import { usersRoutes } from "./routes/users.routes";
import { schoolsRoutes } from "./routes/schools.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/schools", schoolsRoutes);

app.listen(3333, () => {
  console.log("Server running on 3333! 🚀🪐🎶🎼🎛️");
});
