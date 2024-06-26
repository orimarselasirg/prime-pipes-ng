import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPAgeComponent {

  public nameLower: string = "ramiro"
  public nameUpper: string = "RAMIRO"
  public fullName: string = "RaMiRo GRisaLES"
  public customDate: Date = new Date()

}
