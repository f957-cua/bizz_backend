import Router from "express";
import controllerWrapper from "../middleware/controllerWrapper.js";
import checkCreatedDocument from "../middleware/validation.js";
import DocumentController from "../controllers/DocumentController.js";

const documentRouter = new Router()

documentRouter.post(
  "/documents",
  checkCreatedDocument,
  controllerWrapper(DocumentController.create)
);

documentRouter.get("/documents", controllerWrapper(DocumentController.getAll))

export default documentRouter;