class LayoutController {
  async getOne(_, res) {
      const layout = {
        "header": {
          "row":[
            {
              "columns":[
                {
                "type": "field",
                "fieldId": "cc4cb134-fda0-44d8-8e92-e42ebbceb415",
                },
                {
                "type": "field",
                "fieldId": "228b905f-4a43-4a40-b829-0c6a04ad4782",
                }
              ]
            }
          ],
            "rows":[
              {
              "columns":[
                {
                "type": "button",
                "actionType": "save",
                "label": "Save"
                }
              ]
              }
            ]
          }
        }

      res.status(200).json(layout);
  }
  
  async create(req, res) {}

  async getAll(req, res) {}


  async update(req, res) {}

  async delete(req, res) {}
}

export default new LayoutController();
