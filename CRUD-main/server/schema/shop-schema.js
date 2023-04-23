import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

const shopSchema = mongoose.Schema({
  name: {
    type: String,
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
  },

  category: {
    type: String,
    required: true,
  },
});

// autoIncrement.initialize(mongoose.connection);
// shopSchema.plugin(autoIncrement.plugin,'Shop')

// create a geospatial index on the location field
shopSchema.index({ location: "2dsphere" });

export default mongoose.model("Shop", shopSchema);

