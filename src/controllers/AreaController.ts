import express from "express";
import { getAreas } from "../services/AreaService"

export const getAllAreas = async (req: express.Request, res: express.Response): Promise<void> => {
        const Areas = await getAreas()
        console.log(Areas);
        res.render('Areas.html', { AreaList: Areas });
}