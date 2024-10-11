import axios from "axios";
import {API_URL} from "../../global/Variables.ts";

interface IVisitURL {
    url: string
}

export const visitUrl = async (props: IVisitURL) => {
    try {
        const visitedURL: string = `${API_URL}${props.url}`
        console.log("fired", visitedURL)
        await axios.post(`${API_URL}/api/visit`, {url: visitedURL});
    } catch (error) {
        console.error(error);
    }
};
