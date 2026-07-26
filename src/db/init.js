import mongoose from 'mongoose'
import 'server-only'

export async function initDatabase() {
  const DATABASE_URL = process.env.DATABASE_URL
  mongoose.connection.on('open', () => {
    console.info('successfully connected to database:', DATABASE_URL)
  })
  const connection = await mongoose.connect(DATABASE_URL)
  return connection
}
