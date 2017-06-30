import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CompanyModel } from './company.model';

@Injectable()
export class CompaniesService {
  private url = 'https://raw.githubusercontent.com/WeRockTech/remote-jobs/master/companies.json';

  constructor(private http: Http) { }

  getCompanies(): Promise<Array<CompanyModel>> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Array<CompanyModel>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
