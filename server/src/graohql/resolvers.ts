import { users } from "../mock/db";
export const myResolver = {
  Query: {
    users: () => users,
  },
};
