import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET || 'fallback_secret_key';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, jwtSecret, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
    return token;
};

export default generateTokenAndSetCookie;
