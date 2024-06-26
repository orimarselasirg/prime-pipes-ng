import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUppercase: boolean = false;
  public orderBy?: keyof Hero

  public heroes: Hero[] = [
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Goku',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Naruto',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Coraje',
      canFly: true,
      color: Color.blue
    },
  ];

  changeUpperCase(): void{
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value
  }

}
