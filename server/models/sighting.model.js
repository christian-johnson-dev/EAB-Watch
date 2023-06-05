const mongoose = require("mongoose");

const SightingSchema = new mongoose.Schema(
  {
    user: {
      firstName: { type: String },
      lastName: { type: String },
      email: { type: String, required: true },
      phone: { type: String },
    },
    sighting: {
      date: { type: Date },
      location: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
      isAshTree: { type: Boolean, default: false },
      canopyDieback: { type: Boolean, default: false },
      epicormicShoots: { type: Boolean, default: false },
      woodpecker: { type: Boolean, default: false },
      exitHoles: { type: Boolean, default: false },
      feedingGallery: { type: Boolean, default: false },
      emeraldAshBorer: { type: Boolean, default: false },
      hasSpecimen: { type: Boolean, default: false },
      description: { type: String },
      images: [{ type: String }],
      classification: { type: String },
      status: { type: String },
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
