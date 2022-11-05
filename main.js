//?
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

//?
import usersRouter from "./routes/users.js";

import session from "./middleware/session.js";

const app = express();

app.use(session);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve(), "./client/build")));
} else {
  app.use(express.static(path.join(path.resolve(), "./client/public")));
}

//?
app.use("/users", usersRouter);

//todo
export default app;
