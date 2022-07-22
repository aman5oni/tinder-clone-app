import cloudinary from "cloudinary";
import Card from "../models/cardModel";
import fs from "fs";
const addCard = async (req, res) => {
  const { name } = req.body;

  let secure_url = "";
  let public_id = "";
  if (req.files && req.files.image) {
    const image = req.files.image.tempFilePath;
    const mycloud = await cloudinary.v2.uploader.upload(image, {
      folder: "cardImage"
    });
    fs.rmSync("./tmp", {
      recursive: true
    });
    secure_url = mycloud.secure_url;
    public_id = mycloud.public_id;
  }

  const newCard = await new Card({
    name,
    image: {
      public_id: public_id,
      url: secure_url
    }
  });

  const data = await Card.create(newCard);
  res.status(200).json({
    success: true,
    data,
    message: "Data Added Sucessfully"
  });
};

const getCardData = async (req, res) => {
  const data = await Card.find();
  res.status(200).json({
    success: true,
    data,
    message: "Data Fetched Sucessfully"
  });
};

export { getCardData, addCard };
