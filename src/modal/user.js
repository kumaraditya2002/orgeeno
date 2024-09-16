const mongoose = require('mongoose');
// For encrypting password
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    hash_password: { type: String, required: true },
    phone: { type: String, required: false, trim: true },
    image: { type: String, required: false, trim: true},
    confirmCode: { type: String, required: false },
    recoverCode: { type: String, required: false },
    location: {
        lat: {type: Number },
        lng:{type: Number},
    },

    username: {type:String, required: false, unique: true},
    role: {type: String, enum: ["user", "seller"], default: "user",},
    
    isApproved: { type: Boolean, required: true, trim: true, default: false },
    isConfirmed: { type: Boolean, required: true, trim: true, default: false },
    isBlocked: { type: Boolean, required: true, trim: true, default: false },
    isDeleted: { type: Boolean, required: true, trim: true, default: false },
    cart:[{
        product_id:{ type: mongoose.Schema.Types.ObjectId , ref:'Product'},
        quantity:{type:Number},
        size:{type:String},
        color:{type:String},
    }],
    favorite:[{
        product_id:{ type: mongoose.Schema.Types.ObjectId , ref:'Product'},
    }]
},{timestamps: true });

userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
  });


userSchema.virtual('password').set(function(password){
    this.hash_password=bcrypt.hashSync(password, 10);
});

userSchema.methods= {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password );
    }
}

module.exports = mongoose.model('User',userSchema);