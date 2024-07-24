import mongoose, { Document, Schema } from "mongoose";

export interface Score extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  score: number;
  date: Date;
}

const scoreSchema: Schema<Score> = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const ScoreModel =
  (mongoose.models.Score as mongoose.Model<Score>) ||
  mongoose.model<Score>("Score", scoreSchema);

export default ScoreModel;
