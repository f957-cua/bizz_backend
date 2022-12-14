import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import documentRouter from "./routes/documentRouter.js";
import documentDefinitionRouter from "./routes/documentDefinitionRouter.js";
import LayoutRouter from "./routes/layoutRouter.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(compression())

app.use(
  "/api",
  documentDefinitionRouter
);
  
app.use(
  "/api",
  LayoutRouter
);
  
app.use("/api", documentRouter);
    
// bad request
app.use((req, res) => {
  res
    .status(404)
    .json({ message: "Not found" });
});

// uncaught errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res
    .status(status)
    .json({
      status: "fail",
      code: status,
      message: err.message,
    });
});


export default app
