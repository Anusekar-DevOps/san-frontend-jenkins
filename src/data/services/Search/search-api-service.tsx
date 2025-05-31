import HttpClientWrapper from "../../api/http-client-wrapper";
import { Regulator } from "./search-payload";

class SearchService {

  private httpClientWrapper: HttpClientWrapper;

  constructor() {
    this.httpClientWrapper = new HttpClientWrapper();
  }


  updateQcCustomer = async (cmsId: string, uid: string, statusCall: string) => {
    try {
      const response = await this.httpClientWrapper.put(`/api/v1/TaskReassign/updateEntry/${cmsId}/${uid}/${statusCall}?uid=${uid}&statusCall=${statusCall}`);
      return response;
    } catch (error) {
      console.error('Error updating QC customer:', error);
      throw error;
    }
  };

  updateManagerView = async (cmsId: string, uid: string, statusCall: string) => {
    try {
      const response = await this.httpClientWrapper.put(`/api/v1/TaskReassign/updateEntry/${cmsId}/${uid}/${statusCall}?uid=${uid}&statusCall=${statusCall}`);
      return response;
    } catch (error) {
      console.error('Error updating QC customer:', error);
      throw error;
    }
  };

}

export default SearchService;