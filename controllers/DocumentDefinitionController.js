class DocumentDefinitionController {
  async getOne(_, res) {
    const document = {
      "schema": {
        "fields": [{
          "_id": "cc4cb134-fda0-44d8-8e92-e42ebbceb415",
          "label": "Client Name",
          "name":"name",
          "type": "Text",
          "maxLength": 100,
          "label":"Client Age",
          },
          {
          "_id": "228b905f-4a43-4a40-b829-0c6a04ad4782",
          "name": "age",
          "type": "number",
          }
        ]
      }
    }

    res.status(200).json(document)
}
  
  async create(req, res) {}

  async getAll(req, res) {}


  async update(req, res) {}

  async delete(req, res) {}
}

export default new DocumentDefinitionController();
