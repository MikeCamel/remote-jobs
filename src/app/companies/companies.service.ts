import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {CompanyModel} from './company.model';

@Injectable()
export class CompaniesService {
  private url = 'https://raw.githubusercontent.com/WeRockTech/remote-jobs/master/companies.json';
  private details = 'https://raw.githubusercontent.com/WeRockTech/remote-jobs/master/company-profiles/';

  companies: Array<CompanyModel> = [];

  constructor(private http: Http) {
  }

  getAll(): Promise<Array<CompanyModel>> {
    if (this.companies.length > 0) {
      return Promise.resolve(this.companies);
    }

    return this.http.get(this.url)
      .toPromise()
      .then((response) => {
        this.companies = response.json() as Array<CompanyModel>;
        return this.companies;
      })
      .catch(this.handleError);
  }

  getDetails(uri: string): Promise<string> {
    return this.http.get(`${this.details}${uri}`)
      .toPromise()
      .then(response => response['_body'])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
