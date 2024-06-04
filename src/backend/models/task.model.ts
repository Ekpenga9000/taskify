import { Document, Schema, model, models } from "mongoose";

interface ITask {
  userId: Schema.Types.ObjectId;
  projectId: Schema.Types.ObjectId;
  name: string;
  description?: string;
  deadline: Date;
  status: string;
  priority: string;
  createdAt: Date;
}

const projectSchema: Schema<ITask> = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  name: {
    type: String,
    required: [true, "Please provide a name for this category"],
  },
  description: { type: String },
  deadline: {
    type: Date,
    required: [true, "Please provide a deadline for this Task"],
  },
  status: {
    type: String,
    enum: ["open", "in_progress", "completed"],
    default: "open",
    required: true,
  },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "medium",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default models.Project || model("Project", projectSchema);
