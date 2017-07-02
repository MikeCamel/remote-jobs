import {Component, OnInit} from '@angular/core';
import {ITdDataTableColumn, TdDataTableService} from '@covalent/core';
import {CompanyModel} from './company.model';
import {CompaniesService} from './companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  columns: ITdDataTableColumn[] = [
    {name: 'name', label: 'Name'},
    {name: 'profile', label: 'Profile'},
    {name: 'website', label: 'Website'},
    {name: 'regions', label: 'Regions', format: v => v ? v.join() : ''}
  ];

  companies: Array<CompanyModel> = [];
  data: Array<CompanyModel> = [];

  constructor(private companiesService: CompaniesService, private dataTableService: TdDataTableService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.companiesService
      .getAll()
      .then(companies => {
        this.companies = companies;
        this.data = companies
      });
  }

  search(keyword: string): void {
    this.data = this.dataTableService.filterData(this.companies, keyword, true);
  }

}
