import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-research-main',
  templateUrl: './research-main.page.html',
  styleUrls: ['./research-main.page.scss'],
})
export class ResearchMainPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToLocomotionPage() {
    this.navCtrl.navigateForward('/locomotion');
  }

}
