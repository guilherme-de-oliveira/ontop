import { Injectable } from '@angular/core';
import mockUser from '../../assets/data/users-mock.json';
import mockContractor from '../../assets/data/contractor-mock.json';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  // In case of API calls
  // private REST_API_SERVER = 'cirrus/scheduler/getOwner/';

  constructor() { }

  public getClientInfo() {
    // Getting data from API
    // return this.httpClient.get(`${this.REST_API_SERVER}`).pipe(retry(3), catchError(this.handleError));

    // Getting data from json file
    return mockUser.data;
  }

  public getContractorInfo() {
    // Getting data from json file
    return mockContractor.data;
  }
}
