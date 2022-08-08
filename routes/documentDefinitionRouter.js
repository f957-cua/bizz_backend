import Router from "express";
import controllerWrapper from "../middleware/controllerWrapper.js";
import DocumentDefinitionController from "../controllers/DocumentDefinitionController.js";

const documentDefinitionRouter = new Router();

documentDefinitionRouter.get(
  "/definition/:id",
  controllerWrapper(DocumentDefinitionController.getOne)
);

export default documentDefinitionRouter;
