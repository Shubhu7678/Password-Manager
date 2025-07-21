import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const password = mongoose.model('Password', passwordSchema);
export default password