import { env } from "@/env";

export const authConfig = {
  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: 86400, // 1dia
  },
};
