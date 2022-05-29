import mongoose from "mongoose";

export interface JwtPaylodInfo {
    user: {
        id: mongoose.Schema.Types.ObjectId
    }
}