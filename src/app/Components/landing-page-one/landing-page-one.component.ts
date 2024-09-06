import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-one',
  standalone: true,
  imports: [],
  templateUrl: './landing-page-one.component.html',
  styleUrl: './landing-page-one.component.scss'
})
export class LandingPageOneComponent {

  monthlyPayment: number = 562;
  totalDebt: number = 6743;
  repaymentMonths: number = 12;

  taxOwed: number = 0;

  
  
    onSubmit() {
      // Handle form submission
    }

    constructor(private router: Router) {
    }
  
    nextStep() {
      // this.router.navigate(['/congratualationpage']);
    }

}
