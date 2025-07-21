import Password from "../model/password.js";
export const fetchPassword = async (req, res) => {
  try {
    const allPasswords = await Password.find({});

    return res
      .status(200)
      .json({ data: allPasswords, message: "Password fetched successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error occured", error });
  }
};

export const addPassword = async (req, res) => {
  try {
    const { url, username, password } = req.body;

    const newPass = await Password.create({ url, username, password });

    return res
      .status(200)
      .json({ data: newPass, message: "Password added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error occured", error });
  }
};

export const deletePassword = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: "Id is required" });

    await Password.findByIdAndDelete(id);

    return res.status(200).json({ message: "Password deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error occured", error });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { url, username, password } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    const payload = { url, username, password };

    await Password.findByIdAndUpdate(id, payload);

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error occured", error });
  }
};
