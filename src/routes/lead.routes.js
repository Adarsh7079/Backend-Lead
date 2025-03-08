import { Router } from "express";
import express from "express"
import {createLead,getAllLeads} from "../controllers/lead.controller.js";
const router=express.Router();

// API For Creating Leads
router.post("/lead/:slug",createLead);

// API for geting All Leads
router.get("/lead",getAllLeads);

export default router