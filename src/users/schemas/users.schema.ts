import { Schema } from "mongoose";

export const UserSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    email: String,
    celular:String,
});