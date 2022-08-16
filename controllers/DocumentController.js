import Document from "../models/Document.js"

class DocumentController {
  async create(req, res) {
    const { name, age } = req.body;
    const document =
      await Document.create({
        name,
        age,
      });
    res.status(201).json(document);
  }

  async getAll(_, res) {
    const document =
      await Document.find();
    res.status(200).json(document);
  }

  async getOne(req, res) {
    
  }

  async update(req, res) {
    const document = await Document.findByIdAndUpdate(req.params.documentId, { ...req.body }, { new: true })
    res.status(200).json(document)
  }

  async updateField(req, res) {
    if (!req.body["name"] && !req.body["age"]) {
      throw new Error("Bad update request")
    }
    const document = await Document.findByIdAndUpdate(req.params.documentId, { ...req.body }, { new: true })
    res.status(200).json(document)
  }

  async delete(req, res) {
    const document =
      await Document.findByIdAndRemove(req.params.documentId);
    res.status(200).json(document);
  }
}

export default new DocumentController()