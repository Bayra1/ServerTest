import { users } from "../mock/db.js";
export const myResolver = {
  Query: {
    users: () => users,
  },
};
