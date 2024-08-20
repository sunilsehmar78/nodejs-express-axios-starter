import express from "express";
import { getMealCategoryList } from "../services/MealCategoryListService";

export const getAllMeals = async (req: express.Request, res: express.Response): Promise<void> => {
        res.render('mealCategoryList.html', { mealList: await getMealCategoryList() });

    }