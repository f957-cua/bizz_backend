import Joi from "joi"

const schemaCreatedDocument = Joi.object({
  name: Joi.string()
    .min(3)
    .max(100)
    .required(),
  age: Joi.number()
    .min(1)
    .max(150)
    .required(),
});

const validate = async (
  schema,
  obj,
  next
) => {
  try {
    await schema.validateAsync(obj);
    next();
  } catch (err) {
    next({
      status: 400,
      message: err.message.replace(
        /"/g,
        ""
      ),
    });
  }
};

const checkCreatedDocument = (req, _, next) => validate(schemaCreatedDocument, req.body, next)

export default checkCreatedDocument;