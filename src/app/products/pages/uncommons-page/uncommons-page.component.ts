import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommons-page',
  templateUrl: './uncommons-page.component.html',
  styleUrl: './uncommons-page.component.css'
})
export class UncommonsPageComponent {

  public name: string = "Ramiro"
  public gender : 'male'| 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() {
    this.name = 'Daya'
    this.gender = 'female'
  }

  //18Plural
  public clients: string[] = ['Pedro', 'Pablo', 'Miguel', 'Gabriel']
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # cliente esperando',
  }

  deleteClient(){
    this.clients.pop()
  }


  // Key Value pipe
  public person = {
    name: 'Ramiro',
    age: 36,
    address: 'Medellin, Colombia'

  }

  // Async pipe

  public myObservable = interval(2000).pipe(
    tap( value => console.log(value))
  )
}
