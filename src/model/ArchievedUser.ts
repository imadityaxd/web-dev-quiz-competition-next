import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "./User";

const archivedUserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    instaId: {
      type: String,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
);

const ArchivedUser: Model<IUser> =
  mongoose.models.ArchivedUser ||
  mongoose.model<IUser>("ArchivedUser", archivedUserSchema);

export default ArchivedUser;
