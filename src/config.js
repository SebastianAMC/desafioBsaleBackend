import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 4000,
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
};