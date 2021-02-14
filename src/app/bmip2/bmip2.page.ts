import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bmip2",
  templateUrl: "./bmip2.page.html",
  styleUrls: ["./bmip2.page.scss"],
})
export class Bmip2Page implements OnInit {

  getw: String;
  geth: String;
  getStdObjw: String;
  getStdObjh: String;
  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) {}

  ngOnInit() {
    /*this.getw = this.actroute.snapshot.paramMap.get('sendw');
    this.geth = this.actroute.snapshot.paramMap.get('sendh');
    console.log('Weight: '+this.getw);
    console.log('Weight: '+this.geth);*/
    const dataRev = this.actroute.snapshot.paramMap.get('sendStdobj');
    // let getStdObj = JSON.parse(dataRev);
    // console.log(getStdObj);
    // this.getStdObjw =  getStdObj['w'];
    // this.getStdObjh =  getStdObj['h'];
    let geyMusic = JSON.parse(dataRev);
    console.log(geyMusic);
    console.log(geyMusic['single']);
    console.log(geyMusic['artist']);
    console.log(geyMusic['price']);


  }

  sendData(){
    this.navCtrl.pop();
  }
}
