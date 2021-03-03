import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asean',
  templateUrl: './asean.page.html',
  styleUrls: ['./asean.page.scss'],
})
export class AseanPage implements OnInit {

  national_flag: ImageData;
  country: String;
  capital: String;
  religion: String;
  population: String;
  language: String;
  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) { }

  ngOnInit() {

    const dataRev = this.actroute.snapshot.paramMap.get('sendAsean');
    let geyAsean = JSON.parse(dataRev);
    console.log(geyAsean);
    this.national_flag = geyAsean['national_flag'];
    this.country = geyAsean['country'];
    this.capital = geyAsean['capital'];
    this.religion = geyAsean['religion'];
    this.population = geyAsean['population'];
    this.language = geyAsean['language'];

  


  }
  sendData(){
    this.navCtrl.pop();
  }
}
