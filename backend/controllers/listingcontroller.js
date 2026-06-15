import uploadOnCloudinary from "../config/cloudinary.js";
import Listing from "../model/listing.model.js";
import User from "../model/user.model.js";

export const addListing = async (req, res) => {
  try {
    let host = req.userId;
    let { title, description, rent, city, landMark, category } = req.body;
    let image1 = req.files?.image1?.[0]
      ? await uploadOnCloudinary(req.files.image1[0].path)
      : null;

    let image2 = req.files?.image2?.[0]
      ? await uploadOnCloudinary(req.files.image2[0].path)
      : null;

    let image3 = req.files?.image3?.[0]
      ? await uploadOnCloudinary(req.files.image3[0].path)
      : null;
    let listing = await Listing.create({
      title,
      description,
      rent,
      city,
      landMark,
      category,
      image1,
      image2,
      image3,
      host,
    });
    let user = await User.findByIdAndUpdate(
      host,
      { $push: { listing: listing._id } },
      { returnDocument: "after" },
    );
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ message: `Adlisting error ${error}` });
  }
};
