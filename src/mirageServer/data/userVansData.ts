import type { Van } from "../../types/Van";
import type { User } from "./userData";

type UserVansData = {
  userID: User["id"];
  vansIDs: Van["id"][];
};

export const userVansData: UserVansData[] = [
  {
    userID: "ScCtsRev1pkqHqZQYxLPZ",
    vansIDs: [1, 4, 22, 21, 8, 12],
  },
  {
    userID: "RqzFMZLLh4V28-nxVsKJ6",
    vansIDs: [6],
  },
  {
    userID: "bQQtUWS4UfDD4JgWjdunU",
    vansIDs: [5, 23, 11, 10],
  },
];
