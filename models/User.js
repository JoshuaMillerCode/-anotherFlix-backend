const { Schema, model } = require("../config/database")

const userSchema = new Schema({
  active: Boolean,
  // subscription: String,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 255,
    unique: true
  },
  phone: String,
  picture: String,
  favorites: [{type: Schema.Types.ObjectId, ref: "Movie"}]
},
{
  timestamps: true,
  toJSON: {
        // ret is the JSON'ed User Document
        transform: function(doc, ret) {
            // We don't want to return the password back to the client
            delete ret.password
            return ret
        }
    }
})


userSchema.pre('save', async function(next) {
  // This will only hash the password for our newly created user
  this.password = await bcrypt.hash(this.password, saltRounds)
  return next()
})

module.exports = model("User", userSchema)