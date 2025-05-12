import { Model, Schema } from "mongoose";

const UserSchema = Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        profilePicture: {
            type: String,
            required: true
        } 
    }
)

export const UserModel = Model("User", UserSchema);