import mongoose  from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';
let userSchema = mongoose.Schema({
    RepositoryName: String,
    Status: String,
    Findings: [{
        RuleId: String,
        Description: String,
        Severity: String,
        lineNumber: String,
    }]
}, 
    {timestamps: true}      
);
/**
 * autoIncrement.initialize(mongoose.connection);
    userSchema.plugin(autoIncrement.plugin,'userModel');
 * 
 */


// modules.export = mongoose.model('userModel', userSchema);

const postUser = mongoose.model('ScanResult', userSchema);


// export default userSchema;
 export default postUser;