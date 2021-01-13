const mongoose= require('mongoose');
const bcrypt= require('bcrypt');

var adminSchema = new mongoose.Schema({
    email :{type:String, required: true, trim: true},
    firstName : {type:String, required:true },
    lastName : {type:String, trim: true, required: true}, 
    hash_password : {type:String, required: true },
    is_deleted : { type:Boolean, required:false,default:false },
    create_time: { type : Date , default : Date.now },
    is_deleted : { type:Boolean, required:false,default:false },
    role: {type: String, enum: ["admin", "superAdmin"], default: "admin",},

   },{timestamps:true})

adminSchema.virtual('password').set(function(password){
    this.hash_password=bcrypt.hashSync(password, 10);
});

adminSchema.methods= {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password );
    }
}

module.exports = mongoose.model('Admin',adminSchema);
   