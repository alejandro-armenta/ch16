import mongoose, { Schema } from 'mongoose'
import 'server-only'

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

export const User = mongoose.models.user ?? mongoose.model('user', userSchema)
