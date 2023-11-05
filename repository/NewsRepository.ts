import mongoose from "mongoose";
import NewSchema from "../models/NewsSchema";

const NewsRepository = mongoose.model("news", NewSchema);

export default NewsRepository;