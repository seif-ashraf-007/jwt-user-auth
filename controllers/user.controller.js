export const getAllUsers = async (req, res) => {
  res.send("GET User route");
};

export const getUserById = async (req, res) => {
  res.send("GET User by ID route");
};

export const createUser = async (req, res) => {
  res.send("POST User route");
};

export const updateUserById = async (req, res) => {
  res.send("PUT User by ID route");
};

export const deleteUserById = async (req, res) => {
  res.send("DELETE User by ID route");
};
