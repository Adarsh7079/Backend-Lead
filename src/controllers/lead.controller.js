import { Lead } from "../models/lead.models.js";


export const createLead = async (req, res) => {
    try {
      const { name, phone, email } = req.body; // Extract from form
      // Slug is use for getting data from URL like we have URL /m3m-altitude-sector-63-gurugram 
      // slug will get dsata fom URL to put location, sublocation, Project, Builder
      const { slug } = req.params; // Extract from URL
       
      // Split the slug to extract data
      // Removing extra space liek /m3m-altitude-sector-63-gurugram in this ( - ) is extra removing 
      //  array of it like ['m3m' , 'altitude','sector' '63','gurugram]

      const parts = slug.split("-");
     
      // If any URL Do not contain data it will throw error so URL must have all the Infromation to put the lead in db

      if (parts.length < 4) {
        return res.status(400).json({ message: "Invalid URL format" });
      }

      const builder = parts[0];
      const project = parts[1];
      const sublocation = parts.slice(2, parts.length - 1).join("-");
      const city = parts[parts.length - 1];
      
      // Create and save the new lead
      const newLead = new Lead({
        name,
        phone,
        email,
        builder,
        project,
        sublocation,
        city,
      });

      // save new lead in database
      await newLead.save();
      
      res.status(201).json({ message: "Lead created successfully", lead: newLead });
    } catch (error) {
        // console.log(error)
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  
  export const getAllLeads = async (req, res) => {
    try {
      // making DB calls & Fetch all leads from DB
      const leads = await Lead.find(); 
      res.status(200).json({ success: true, leads });
    } catch (error) {
      // console.log(error);
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };
  