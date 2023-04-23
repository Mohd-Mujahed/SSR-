import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

const shopSchema = mongoose.Schema({
  range: {
    type: Number,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  }
});

// autoIncrement.initialize(mongoose.connection);
// shopSchema.plugin(autoIncrement.plugin,'Shop')

// create a geospatial index on the location field
shopSchema.index({ location: "2dsphere" });

const NearShop = mongoose.model("Shop", shopSchema);

export default NearShop;
