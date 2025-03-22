import { ICountry } from "../constants/country";
import {
  createCountry,
  UpdateCountry,
  deleteCountry,
  getAllCountries,
} from "../services/country.service";
import { Response, Request, NextFunction } from "express";

export const CountryController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const result = await createCountry(body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params; 
      const updateFields = req.body;
      const result = await UpdateCountry(id, updateFields);
      res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await deleteCountry(id);
      res.status(200).json(result);
    } catch (error) {
      next();
    }
  },
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getAllCountries();
      res.json(result);
    } catch (error) {
      next(error)
    }
  },
};
