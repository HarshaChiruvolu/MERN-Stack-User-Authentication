import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    director: {
      type: String,
      required: true,
    },
    actor1: {
      type: String,
      required: true,
    },
    actor2: {
      type: String,
    },
    genre: {
      type: [String], 
      required: true,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
