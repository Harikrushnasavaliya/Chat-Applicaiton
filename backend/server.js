import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // Import cookie-parser middleware

import authRoutes from "./router/auth.router.js";
import messageRoutes from "./router/message.router.js";
import userRoutes from "./router/user.router.js";

import connectToMongoDB from '../backend/db/connectToMongoDB.js';
// import protectRoute from "./middleware/protectRoute.js"; // Import protectRoute middleware

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectToMongoDB();

app.use(express.json());
app.use(cookieParser()); 
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
    res.send("hum aa gaye!");
});

app.listen(PORT, async () => {
    try {
        await connectToMongoDB();
        console.log("swagat nahi karoge");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
});
