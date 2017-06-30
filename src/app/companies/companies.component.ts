import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';
import { CompanyModel } from './company.model';
import { CompaniesService } from './companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [CompaniesService]
})
export class CompaniesComponent implements OnInit {

  columns: ITdDataTableColumn[] = [
    { name: 'name',  label: 'Name' },
    { name: 'profile',  label: 'Profile' },
    { name: 'website',  label: 'Website' },
    { name: 'regions',  label: 'Regions', format: v => v ? v.join() : '' }
  ];

  data: Array<CompanyModel> = [];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companiesService
      .getCompanies()
      .then(companies => {
        this.data = companies
      });
  }

}
