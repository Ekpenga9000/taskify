import mongoose, {Document, Schema} from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document{
    username: string;
    email: string;
    password: string; 
    coins: number; 
    adventurerType: string; 
    rank: number;
    role: string;
    avatar: {
        public_id: string;
        url: string;
    }
}; 

const userSchema: Schema<IUser> = new Schema<IUser>({
    username: {
        type: String,
        unique: true, 
        required: [true, "Username is required"],
        minlength: [2, "Username must be at least 3 characters."]
    },
    email: {
        type: String, 
        unique: true, 
        required: [true, "Pleasse provide your email address."]
    },
    password: {
        type: String, 
        required: [true, "Password is required"],
        minlength:[5, "Password must be at least 5 characters long."]
    },
    coins: {
        type: Number, 
        default: 0
    },
    adventurerType: {
        type: String, 
        enum: ["Warrior", "Mage", "Archer"],
        default: "Warrior"
    },
    rank: {
        type: Number, 
        default: 1
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    },
    avatar: {
        public_id: String,
        url: String
    }

});

userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) {
        next(); 
    } 
    
    this.password = await bcrypt.hash(this.password, 10); 
});

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);