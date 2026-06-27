import uploadOnCloudinary from "../config/cloudinary.js";
import Listing from "../model/listing.model.js";
import User from "../model/user.model.js";

export const addListing = async (req, res) => {
  try {
    let host = req.userId;
    let { title, description, rent, city, landMark, category } = req.body;
    let image1 = "";
    let image2 = "";
    let image3 = "";

    if (req.files?.image1) {
      image1 = await uploadOnCloudinary(req.files.image1[0].path);
    }

    if (req.files?.image2) {
      image2 = await uploadOnCloudinary(req.files.image2[0].path);
    }

    if (req.files?.image3) {
      image3 = await uploadOnCloudinary(req.files.image3[0].path);
    }
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

export const getListing = async (req, res) => {
  try {
    let listing = await Listing.find().sort({ createdAt: -1 });
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: `getListing error ${error}` });
  }
};

export const findListing = async (req, res) => {
  try {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      res.status(404).json({ message: "listing not found" });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: `FindingListing error ${error} `});
  }
};
