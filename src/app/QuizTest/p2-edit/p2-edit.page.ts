import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2-edit',
  templateUrl: './p2-edit.page.html',
  styleUrls: ['./p2-edit.page.scss'],
})
export class P2EditPage implements OnInit {
  title: String;
  genre: ImageData;
  review: Number;
  constructor(public navCtrl: NavController, public actroute: ActivatedRoute, private alertCtrl: AlertController,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('sendlist');
    let geyAsean = JSON.parse(dataRev);
    console.log(geyAsean);
    this.title = geyAsean['title'];
    this.genre = geyAsean['genre'];
    this.review = geyAsean['review'];
  }
  

  update(){
    console.log(this.title,this.review);
  }
  sendData(){
    this.navCtrl.pop();
  }
}
