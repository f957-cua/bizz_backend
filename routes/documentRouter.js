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

documentRouter.delete("/documents/:documentId", controllerWrapper(DocumentController.delete))

documentRouter.put("/documents/:documentId", controllerWrapper(DocumentController.update))

documentRouter.patch("/documents/:documentId", controllerWrapper(DocumentController.updateField))

export default documentRouter;