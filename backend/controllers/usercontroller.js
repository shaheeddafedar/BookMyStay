import User from "../model/user.model.js";

export const getcurrentUser = async (req, res) => {
  try {
    let user = await User.findById(req.userId)
      .select("-password")
      .populate({
        path: "listing",
        select:
          "title image1 image2 image3 description rent category city landMark isBooked host rating like",
        options: { sort: { createdAt: -1 } },
      })
      .populate({
        path: "booking",
        select:
          "title image1 image2 image3 description rent category city landMark isBooked host rating like",
        options: { sort: { createdAt: -1 } },
      });

    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: `getcurrentuser ${error}`,
    });
  }
};
