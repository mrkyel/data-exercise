import axios from "axios";
import { BASE_URL } from "config/constants";

export async function getPatientList(params) {
    try {
        const res = await axios({
            method: 'get',
            url: `${BASE_URL}patient/list`,
            params,
        })
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}