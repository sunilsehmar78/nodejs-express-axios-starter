import axios, { AxiosResponse } from "axios";

export const getRandomMeal = async (): Promise<void> => {
    try {
        const response: AxiosResponse = await axios.get("https://www.themealdb.com/api/json/v2/1/random.php");

        return response.data;
    } catch (e) {
        throw new Error(e.message);
    }
}