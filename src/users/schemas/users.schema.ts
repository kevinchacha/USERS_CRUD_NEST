import { Schema } from "mongoose";

export const UserSchema = new Schema({
    nombre: String,
    password: String,
    edad: Number,
    email: String,
    celular:String,
});