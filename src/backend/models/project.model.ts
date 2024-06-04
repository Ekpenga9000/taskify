import { Document, Schema, model, models } from "mongoose";

interface IProject{
    userId: Schema.Types.ObjectId; 
    categoryId: Schema.Types.ObjectId[]; 
    name: string;
    description?: string;
}

const projectSchema: Schema<IProject> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    categoryId: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }],
    name: { type: String, required: [true, "Please provide a name for this category"]},
    description: { type: String, }
}); 

export default models.Project || model("Project", projectSchema);