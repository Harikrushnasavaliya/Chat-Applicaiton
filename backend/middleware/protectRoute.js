import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";
const jwtSecret = process.env.JWT_SECRET || 'fallback_secret_key';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log(":::",token);
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: Token missing" });
        }

        const decode = jwt.verify(token, jwtSecret);
        if (!decode) {
            return res.status(401).json({ error: "Unauthorized: Invalid token" });
        }

        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (decode.exp < currentTimestamp) {
            return res.status(401).json({ error: "Unauthorized: Token expired" });
        }

        const user = await User.findById(decode.userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectRoute middleware:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export default protectRoute;