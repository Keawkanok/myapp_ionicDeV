import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listbuy",
  templateUrl: "./listbuy.page.html",
  styleUrls: ["./listbuy.page.scss"],
})
export class ListbuyPage implements OnInit {
  listBuy: any;
  Buy: any;
  constructor(public router: Router) {}
  ngOnInit() {
    this.listBuy = [
      {
        id: 1,
        image: "https://img.icons8.com/color/48/000000/pickup-front-view.png",
        title: "FORD",
        price: 659000,
        checked: false,
      },
      {
        id: 2,
        image: "https://img.icons8.com/color/48/000000/police-car.png",
        title: "Police car",
        price: 590000,
        checked: true,
      },
      {
        id: 3,
        image: "https://img.icons8.com/color/48/000000/f1-race-car-top-veiw.png",
        title: "Race car",
        price: 10000000,
        checked: false,
      },
      {
        id: 4,
        image: "https://img.icons8.com/color/48/000000/car.png",
        title: "Honda Jazz",
        price: 599000,
        checked: true,
      },
      {
        id: 5,
        image: "https://img.icons8.com/color/48/000000/electric-bumper-car.png",
        title: "Bumper car",
        price: 490000,
        checked: true,
      },
      {
        id: 6,
        image: "https://img.icons8.com/color/48/000000/car-top-view.png",
        title: "Honda",
        price: 790000,
        checked: true,
      },
    ];
  }

  buy(tmpitem: any) {
      let Buy = JSON.stringify(this.listBuy);
      this.router.navigate(["buy", Buy]);
  }
}
