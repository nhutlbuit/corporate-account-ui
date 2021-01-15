import {parseItem} from "../services/ResponseHandler";
import axios from "axios";
import {ServiceUrlConst} from "../common/constants/ServiceUrlConst";

export const accountReportApi = async (filter: any) => {
    const response = await axios.post(`${ServiceUrlConst.GET_ACCOUNT_REPORT}`, filter);
    return parseItem(response, 200);
};