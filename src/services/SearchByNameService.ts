import axios, { AxiosResponse } from "axios";

export const getNameQueryResult = async (query: String): Promise<void> => {
    try {
        const response: AxiosResponse = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        
        return response.data;
    } catch (e) {        
        throw new Error(e.message);
    }
}