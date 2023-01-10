import { Document } from "mongoose";

export interface User extends Document {
    readonly nombre: string;
    readonly apellido: string;
    readonly edad: number;
    readonly email: string;
    readonly celular: string;

}