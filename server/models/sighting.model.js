const mongoose = require("mongoose");

const SightingSchema = new mongoose.Schema(
  {
    user: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String },
    },
    sighting: {
      date: { type: Date, required: true },
      location: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
      isAshTree: { type: Boolean, default: false },
      canopyDieback: { type: Boolean, default: false },
      epicormicShoots: { type: Boolean, default: false },
      woodpecker: { type: Boolean, default: false },
      exitHoles: { type: Boolean, default: false },
      feedingGallery: { type: Boolean, default: false },
      barkSplitting: { type: Boolean, default: false },
      emeraldAshBorer: { type: Boolean, default: false },
      hasSpecimen: { type: Boolean, default: false },
      comments: { type: String },
      images: [{ type: String }],
      classification: {
        type: String,
        default: "pending classification",
      },
      status: {
        type: String,
        enum: ["verified", "pending", "reclassified"],
        default: "pending",
      },
    },
    adminResponse: {
      responseDate: { type: Date },
      response: { type: String },
      responderName: { type: String },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Sighting", SightingSchema);
