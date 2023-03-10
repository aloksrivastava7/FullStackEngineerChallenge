import mongoose  from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    RepositoryName: String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'userModel');

const postUser = mongoose.Model('userModel', userSchema);

export default postUser;