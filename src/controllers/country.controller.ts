import {
  createCountry,
  UpdateCountry,
  deleteCountry,
} from "../services/country.service";
import { Response, Request, NextFunction } from "express";

export const CountryController = {
  async create(res: Response, req: Request, next: NextFunction) {
    try {
      const body = req.body;
      const result = await createCountry(body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },
  async update(res: Response, req: Request, next: NextFunction){
    try{
        const {id}=req.params
    }catch(error){}
  }
};
