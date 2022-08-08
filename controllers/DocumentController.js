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

  }

  async delete(req, res) {

  }
}

export default new DocumentController()