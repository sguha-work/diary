import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AllMemoriesPage } from '../all-memories/all-memories';
import { AddMemoryPage } from '../add-memory/add-memory';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AllMemoriesPage;
  tab2Root: any = AddMemoryPage;
  tab3Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
