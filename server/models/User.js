const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    reservations: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
      }
    ],
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password before saving
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});


userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// virtual field for savedCars count
userSchema.virtual("savedCars").get(function () {
  return this.savedCars.length;
});

const User = model("User", userSchema);

module.exports = User;
