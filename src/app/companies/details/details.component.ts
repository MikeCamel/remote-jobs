import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [CompaniesService]
})
export class DetailsComponent implements OnInit {

  data: string;

  constructor(private companiesService: CompaniesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');

    this.getOne(name);
  }

  getOne(name: string): void {
    this.companiesService
      .getDetails(name)
      .then(company => {
        this.data = company
      });
  }

}
