import { Lead } from "../models/lead.models.js";


export const createLead = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const { slug } = req.params;

    // Ensure slug exists
    if (!slug || slug.trim() === "") {
      return res.status(400).json({ message: "Slug is required in the URL" });
    }

    // Split the slug and remove extra spaces
    const parts = slug.split("-").filter(Boolean); // Remove empty values

    // Assign values with defaults ("......" if missing)
    const builder = parts[0] || "......";
    const project = parts[1] || "......";
    const sublocation =
      parts.length > 3 ? parts.slice(2, parts.length - 1).join("-") : "......";
    const city = parts.length > 2 ? parts[parts.length - 1] : "......";

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

    await newLead.save();

    res.status(201).json({ message: "Lead created successfully", lead: newLead });
  } catch (error) {
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
  