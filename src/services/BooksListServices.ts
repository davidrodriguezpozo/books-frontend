import axios from "axios";
import { API_URL } from "@/constants";
import IList from "@/api/IList";

export default class BooksListServices {
    public static async loadList(skip: number): Promise<IList> {

        const { data } = await axios.get(`${API_URL}/books`, {
            params: { skip: skip },
        });
        return data;
    }
}
