import Users from "../db/models/Users";

export const findUserByEmail = async (email: string) => {
  const findUser = await Users.findOne({
    where: { email: email },
  });

  return findUser;
};
