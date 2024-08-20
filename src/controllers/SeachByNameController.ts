import express from "express";
import { getNameQueryResult } from "../services/SearchByNameService";

export const getNameResult = async (req: express.Request, res: express.Response): Promise<void> => {
        const query = req.body.name;
        const searchedMeal = await getNameQueryResult(query);
        
        res.render('mealSearchResult.html', {searchedMeal: searchedMeal})
};