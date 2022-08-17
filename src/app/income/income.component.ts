import { Component, OnInit } from '@angular/core';
import { IncomeService } from './income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  income = {
    incomeSource: '',
    incomeMoney: null,
    description: '',
    incomeStartDate: null,
    incomeEndDate: null,
    incomeExpireDate: null,
    published: false
  };
  submitted = false;
  constructor(private incomeservice: IncomeService) { }

  ngOnInit(): void {
  }

  addIncome(): void {
    const data = {
      incomeSource: this.income.incomeSource,
      incomeMoney : this.income.incomeMoney,
      description: this.income.description,
      incomeStartDate : this.income.incomeStartDate,
      incomeEndDate : this.income.incomeEndDate,
      incomeExpireDate : this.income.incomeExpireDate
    };
    this.incomeservice.addIncome(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  updateIncome():void{
    const data = {
      incomeSource: this.income.incomeSource,
      incomeMoney : this.income.incomeMoney,
      description: this.income.description,
      incomeStartDate : this.income.incomeStartDate,
      incomeEndDate : this.income.incomeEndDate,
      incomeExpireDate : this.income.incomeExpireDate
    };
    this.incomeservice.addIncome(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }
}
