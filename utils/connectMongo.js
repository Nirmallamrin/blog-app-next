import mongoose from "mongoose"

const connectMongo = async ()=> mongoose.connect(process.env.MONGODB)

export default connectMongo   

