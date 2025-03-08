import mongoose from 'mongoose';

// Schema for Leads that will be column of database 
// We can make it required which will be imporant filed without that form will not be accepteds

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true
    },
    email: {
      type: String,
      // required: true
    },
    phone: {
      type: String,
      // required: true
    },
    city: {
      type: String,
      // required: true
    },
    sublocation: {
      type: String,
    },
    builder: {
      type: String,
      // required: true
    },
    project: {
      type: String,
      // required: true
    }
  },
  {
     // This will automatically add createdAt and updatedAt fields time stamp when lead will generated
    timestamps: true,
  }
);
// Lead is DB name in atlas i have use my own DB we can use any db by replacing  MONGODB_URI in .env file *** src/.env  ***
export const Lead = mongoose.model("Lead", schema);
