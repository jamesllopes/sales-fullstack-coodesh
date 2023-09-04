import Users from "../db/models/Users";

export const findUserByEmail = async (email: string) => {
  const findUser = await Users.findOne({
    where: { email: email },
  });

  return findUser;
};

export const findUserById = async (id: number) => {
  const findUser = await Users.findOne({
    where: { id: id },
  });

  return findUser;
};
