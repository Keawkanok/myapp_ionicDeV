import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {

  image: ImageData;
  cream: String;
  title: String;
  price: Number;
  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) { }

  ngOnInit() {
    const dataDev = this.actroute.snapshot.paramMap.get('sendBuy');
    let getBuy = JSON.parse(dataDev);
    console.log(getBuy , "out");
    this.cream = getBuy[1];
    console.log(this.cream);

    // this.cream = getBuy;
    // for(let i=0; i < this.cream.length; i++){
    //   console.log(getBuy['cream']);
    // }
  }


  sendData(){
    this.navCtrl.pop();
  }
}
