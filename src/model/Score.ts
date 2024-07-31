// score.model.ts
import mongoose, { Schema, Document, Model } from "mongoose";
import UserModel from "./User";

export interface IScore extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  score: number;
  date: Date;
}

const scoreSchema = new Schema<IScore>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  score: { type: Number, required: true },
  date: { type: Date, required: true },
}, { timestamps: true });

const ScoreModel: Model<IScore> = mongoose.models.Score || mongoose.model<IScore>("Score", scoreSchema);

export default ScoreModel;
