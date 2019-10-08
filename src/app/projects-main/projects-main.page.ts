import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-projects-main',
  templateUrl: './projects-main.page.html',
  styleUrls: ['./projects-main.page.scss'],
})
export class ProjectsMainPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToProjectTemplatePage() {
    this.navCtrl.navigateForward('/project-template');
  }

  goToWormWranglers() {
    this.navCtrl.navigateForward('/worm-wranglers');
  }

}
