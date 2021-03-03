import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmip1',
  templateUrl: './bmip1.page.html',
  styleUrls: ['./bmip1.page.scss'],
})
export class Bmip1Page implements OnInit {

  weight: number;
  height: number;
  age: number;
  faculty: String; fullname: String;

  studentobj: any;

  constructor(public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
  }

  sendData(){
    // this.navCtrl.navigateForward('/bmip2/' + this.weight + '/' +this.height);
    this.studentobj = {
      // name: this.fullname,
      w: this.weight,
      h: this.height,
      // age: this.age,
      // fact: this.faculty
    }
    const dataString = JSON.stringify(this.studentobj);
    this.router.navigate(['bmip2', dataString]);
  }
}
