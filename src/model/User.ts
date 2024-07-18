import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  name: string;
  instaId: string;
}

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
  { timestamps: true }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);

export default UserModel;
