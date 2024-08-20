import express from "express";
import { getRandomMeal } from "../services/SingleMealService";

export const getMeal = async (req: express.Request, res: express.Response): Promise<void> => {

        const randomMeal = await getRandomMeal()
        console.log(randomMeal);
        res.render('singleMeal.html', { singleMeal: randomMeal });
};