import { Router } from "express";
import { CountryController } from "../controllers/country.controller";


export const countryRouter=Router()

countryRouter.post("/",CountryController.create)
countryRouter.get("/",CountryController.getAll)
countryRouter.put("/:id",CountryController.update)
countryRouter.delete("/:id",CountryController.delete)
