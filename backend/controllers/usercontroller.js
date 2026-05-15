import User from "../model/user.model";

export const getcurrentUser = async (req, res) => {
  try {
    let user = await User.findById(req.userId).select(-password);
    if (!user) {
      res.status(400).json({ message: "user doent found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `getcurrentuser ${error}` });
  }
};
