import app from "../app.js"
import mongoose from "mongoose";
import env from "dotenv";

env.config()

const { DB_URL, PORT = 5000 } = process.env;

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => {
      console.log(
        `Backend started on Port: ${PORT}`
      );
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1)
  }
}

startApp();