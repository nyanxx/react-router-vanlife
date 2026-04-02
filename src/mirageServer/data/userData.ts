export type User = {
  id: string;
  username: string;
  email: string;
  password_hash: string;
  salt?: string;
  created_at: string;
  role: "user" | "admin";
};

export const users: User[] = [
  {
    id: "RqzFMZLLh4V28-nxVsKJ6",
    username: "jose",
    email: "Bubbling55Hose$$Myst",
    password_hash:
      "$2b$10$o7B7Ms/IH94klH7v4OlB5uAW.CLqQzch9kovBsyTo/OH0LskBxZX2",
    created_at: "2026-03-30T04:39:28.735Z",
    role: "user",
  },
  {
    id: "qY_S9Rzr6T8Gox8tsT0jE",
    username: "admin",
    email: "center-vanlife@vanfile.com",
    password_hash:
      "$2b$10$FXujrJOnbC.g1p71CkU1suZP65/.lwhMsmyjTIww4YJgj/pVE/c0i", // admin@vanlife.com
    created_at: "2026-03-30T04:36:57.527Z",
    role: "admin",
  },
  {
    id: "bQQtUWS4UfDD4JgWjdunU",
    username: "lucas",
    email: "lucasfiction@yahoo.com",
    password_hash:
      "$2b$10$OAkAAXKOknQ3WcbM1SO5heCsZuHDcG.rzF0ig57uzF96AzVPeYqcm", // Lucas@Pass123
    created_at: "2026-03-30T04:33:38.830Z",
    role: "user",
  },
  {
    id: "ScCtsRev1pkqHqZQYxLPZ",
    username: "testingaccount",
    email: "test@test.com",
    password_hash:
      "$2b$10$MepLn17QwuSYgbQscckap.jie8Uf00Fy.rfkQzyp/3sTNXel80j5O", // Test@123
    created_at: "2026-03-30T04:46:51.528Z",
    role: "user",
  },
];
