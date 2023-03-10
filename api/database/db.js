import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-059xhux-shard-00-00.1drj9o8.mongodb.net:27017,ac-059xhux-shard-00-01.1drj9o8.mongodb.net:27017,ac-059xhux-shard-00-02.1drj9o8.mongodb.net:27017/?ssl=true&replicaSet=atlas-fh167b-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected Successfully");
    } catch(error) {
        console.log("Error while connecting with the database", error.message);
    }
}

export default Connection;