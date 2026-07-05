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
   return res.status(201).json(listing);
  } catch (error) {
   return res.status(500).json({ message: `Adlisting error ${error}` });
  }
};

export const getListing = async (req, res) => {
  try {
    let listing = await Listing.find().sort({ createdAt: -1 });
   return res.status(200).json(listing);
  } catch (error) {
   return res.status(500).json({ message: `getListing error ${error}` });
  }
};

export const findListing = async (req, res) => {
  try {
    let { id } = req.params;
    let listing = await Listing.findById(id)
    if (!listing) {
      res.status(404).json({ message: "listing not found" });
    }
   return res.status(200).json(listing);
  } catch (error) {
   return res.status(500).json({ message: `FindingListing error ${error} `});
  }
};


export const updateListing = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, rent, city, landMark, category } = req.body;

    const updateData = {
      title,
      description,
      rent,
      city,
      landMark,
      category,
    };

    if (req.files?.image1) {
      updateData.image1 = await uploadOnCloudinary(req.files.image1[0].path);
    }

    if (req.files?.image2) {
      updateData.image2 = await uploadOnCloudinary(req.files.image2[0].path);
    }

    if (req.files?.image3) {
      updateData.image3 = await uploadOnCloudinary(req.files.image3[0].path);
    }

    const listing = await Listing.findByIdAndUpdate(
      id,
      updateData,
      {
        returnDocument: "after",
      }
    );

    return res.status(200).json(listing);

  } catch (error) {

    return res.status(500).json({
      message: `updateListing error ${error}`,
    });
  }
};

export const deleListing = async (req,res) => {
  try {
    let {id} = req.params
    let listing = await Listing.findByIdAndDelete(id)
    let user = await User.findByIdAndUpdate(listing.host,{
           $pull:{listing:listing._id}
    },{returnDocument: "after"})
   if (!user) {
    return res.status(404).json({message :"user is not found"})
   }
   return res.status(201).json({message:"Listing deleted "})
  } catch (error) {
    return res.status(500).json({
      message: `DeleteingListing error ${error}`,
    });
  }
}