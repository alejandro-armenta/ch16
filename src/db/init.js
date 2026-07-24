import mongoose from 'mongoose'
import 'server-only'

export async function initDatabase() {
  const connection = await mongoose.connect(process.env.DATABASE_URL)
  return connection
}
