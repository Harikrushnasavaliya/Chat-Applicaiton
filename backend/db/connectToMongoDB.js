// import mongoose from "mongoose";

// const connectToMongoDB = async (req, res) => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URL);
//         console.log("connect ho gaya");
//     } catch (error) {
//         console.log("Errorrr");
//     }
// }

// export default connectToMongoDB;

import mongoose from 'mongoose';

const mongURI = "mongodb://127.0.0.1:27017/livechat";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
};

export default connectToMongoDB;

