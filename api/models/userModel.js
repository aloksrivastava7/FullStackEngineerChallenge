import mongoose  from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    RepositoryName: String,
    Status: String,
    Findings: {
        RuleId: String,
        Description: String,
        Severity: String,
        lineNumber: String
    },
    QueuedAt: String,
    ScanningAt: String,
    FinishedAt: String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'userModel');

const postUser = mongoose.model('userModel', userSchema);

export default postUser;