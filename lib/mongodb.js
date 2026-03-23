import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable in .env.local",
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongoDB() {
  if (cached.conn) {
    console.log("MongoDB: using existing connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        bufferCommands: false,
        dbName: "Econova_Database",
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 5000,
      })
      .then((m) => {
        console.log(`MongoDB connected successfully`);
        return m;
      })
      .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
        if (err.code === "ECONNREFUSED" || err.message.includes("querySrv")) {
          console.error(
            "   ↳ Tip: Check your MONGO_URI in .env.local — make sure\n" +
              "     the username & password are your Atlas DATABASE USER\n" +
              "     credentials (Security → Database Access), NOT your Atlas login.",
          );
        }
        cached.promise = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongoDB;
