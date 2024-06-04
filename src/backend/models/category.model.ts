import { Document, Schema, model, models } from "mongoose";

interface ICategory{
    userId: Schema.Types.ObjectId; 
    name: string;
    description?: string;
}

const categorySchema: Schema<ICategory> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: [true, "Please provide a name for this category"]},
    description: { type: String, }
}, {timestamps:true}); 

export default models.Category || model("Category", categorySchema);