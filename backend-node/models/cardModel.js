import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    url: String,
    public_id: String
  }
});

const Card = mongoose.model("cards", cardSchema);

export default Card;
