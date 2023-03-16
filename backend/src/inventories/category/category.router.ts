import express from "express";
import type{ Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as CategoryService from "./category.services";


export const categoryRouter = express.Router();
  // POST: Create a Author
  // Params: firstName, lastName
  categoryRouter.post("/",
    
    body("name").isString(),
    async (req: Request, res: Response) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }
      try {
        const category = req.body;
        console.log("🚀 ~ file: category.router.ts ~ line 21 ~ category", category)
        const newCategory = await CategoryService.createCategory(category);
        return res.status(201).json(newCategory);
      } catch (error: any) {
        return res.status(500).json(error.message);
      }
    }
  );