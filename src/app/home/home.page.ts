import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name:string;
  surname:string;
  age:string;
  gender:string;
  constructor() {}
  print(){
    console.log(this.name);
    console.log(this.surname);
    console.log(this.age);
    console.log(this.gender);

  }
}
