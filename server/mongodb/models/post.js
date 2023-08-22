import mongoose, { Mongoose } from "mongoose";

const Post = new Mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
