import express from "express";
import { getAreas } from "../services/AreaService"

export const getAllAreas = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('Areas.html', { AreaList: await getAreas() });
}