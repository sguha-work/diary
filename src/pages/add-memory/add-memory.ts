import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-memory',
  templateUrl: 'add-memory.html'
})


export class AddMemoryPage {
  public todaysDate : string;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  setupBaseVariableAndPAckage() : any {
    let today : any = new Date();
    let dd : any = today.getDate();
    let mm : any = today.getMonth()+1; //January is 0!
    let yyyy : any = today.getFullYear();

    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = mm+'/'+dd+'/'+yyyy;
    this.todaysDate = today;
  }

  constructor(public navCtrl: NavController) {
    this.setupBaseVariableAndPAckage()
  }
  
}
