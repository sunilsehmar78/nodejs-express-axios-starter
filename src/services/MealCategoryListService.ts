import axios, { AxiosResponse } from "axios";

export const getMealCategoryList = async (): Promise<string[]> => {
    try {
        const response: AxiosResponse = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get databases');
    }
}