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

export async function getEthnicityList() {
    try {
        const res = await axios({
            method: 'get',
            url: `${BASE_URL}ethnicity/list`,
        })
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getGenderList() {
    try {
        const res = await axios({
            method: 'get',
            url: `${BASE_URL}gender/list`,
        })
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getRaceList() {
    try {
        const res = await axios({
            method: 'get',
            url: `${BASE_URL}race/list`,
        })
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}