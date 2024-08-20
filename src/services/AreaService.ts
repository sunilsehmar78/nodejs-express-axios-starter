import axios, { AxiosResponse } from "axios";

export const getAreas = async (): Promise<string[]> => {
    try {
        const response: AxiosResponse = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get Links');
    }
}