import { db } from "@/lib/database";

export const findUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while trying to find the user" };
  }
};

export const findUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while trying to find the user" };
  }
};
