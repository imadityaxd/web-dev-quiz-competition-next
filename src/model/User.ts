import mongoose, { Document, Schema } from "mongoose";

// Define the User interface extending Document for Mongoose
export interface User extends Document {
  name: string;
  instaId: string;
}

// Define the User schema with the necessary fields and their types
const userSchema: Schema<User> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    instaId: {
      type: String,
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Check if the model already exists to avoid recompiling it
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);

export default UserModel;
