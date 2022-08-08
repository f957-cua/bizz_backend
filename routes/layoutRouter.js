import Router from "express";
import controllerWrapper from "../middleware/controllerWrapper.js";
import LayoutController from "../controllers/LayoutController.js";

const LayoutRouter =
  new Router();

LayoutRouter.get(
  "/layout/:id",
  controllerWrapper(LayoutController.getOne)
);

export default LayoutRouter;