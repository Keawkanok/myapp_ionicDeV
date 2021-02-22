import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buy",
  templateUrl: "./buy.page.html",
  styleUrls: ["./buy.page.scss"],
})
export class BuyPage implements OnInit {
  image: ImageData;
  price: Number;
  data: any = [];
  total: any = [];
  sum: number;
  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) {}

  ngOnInit() {
    const dataDev = this.actroute.snapshot.paramMap.get("sendBuy");
    let getBuy = JSON.parse(dataDev);
    console.log(getBuy, "out");
    for (let i = 0; i < getBuy.length; i++) {
      this.total.push(getBuy[i]["price"]);
      this.data.push({
        title: getBuy[i]["title"],
        price: getBuy[i]["price"],
        image: getBuy[i]["image"],
      });
    }
    this.sum = this.total.reduce((partial_sum, a) => partial_sum + a, 0);
    console.log("price", this.sum);
  }

  sendData() {
    this.navCtrl.pop();
  }
}
