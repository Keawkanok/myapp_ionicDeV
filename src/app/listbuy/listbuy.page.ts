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
        image: "https://img.icons8.com/color/48/000000/face-powder.png",
        cream: "Face Powder",
        price: 145.5,
        checked: false,
      },
      {
        id: 2,
        image: "https://img.icons8.com/color/48/000000/lipstick.png",
        cream: "Lipstick",
        price: 125.5,
        checked: true,
      },
      {
        id: 3,
        image: "https://img.icons8.com/color/d48/000000/foundation-makeup.png",
        cream: "Foundation Makeup",
        price: 245.5,
        checked: false,
      },
      {
        id: 4,
        image: "https://img.icons8.com/color/48/000000/perfume-bottle.png",
        cream: "Perfume",
        price: 405.2,
        checked: true,
      },
      {
        id: 5,
        image: "https://img.icons8.com/color/48/000000/cream-tube.png",
        cream: "Cream Tube",
        price: 115.2,
        checked: true,
      },
      {
        id: 6,
        image: "https://img.icons8.com/color/48/000000/cosmetic-brush.png",
        cream: "Cosmetic Brush",
        price: 200.5,
        checked: true,
      },
    ];
  }

  buy(tmpitem: any) {
    let lists = [];
    for (let i = 0; i < this.listBuy.length; i++) {
      if (this.listBuy[i].checked) {
        if (i === 0) {
          lists.push({
            image: "https://img.icons8.com/color/48/000000/face-powder.png",
            cream: "Face Powder",
            price: 145.5,
          });
        }
        if (i === 1) {
          lists.push({
            image: "https://img.icons8.com/color/48/000000/lipstick.png",
            cream: "Lipstick",
            price: 125.5,
          });
        }
        if (i === 2) {
          lists.push({
            image:
              "https://img.icons8.com/color/d48/000000/foundation-makeup.png",
            cream: "Foundation Makeup",
            price: 245.5,
          });
        }
        if (i === 3) {
          lists.push({
            image: "https://img.icons8.com/color/48/000000/perfume-bottle.png",
            cream: "Perfume",
            price: 405.2,
          });
        }
        if (i === 4) {
          lists.push({
            image: "https://img.icons8.com/color/48/000000/cream-tube.png",
            cream: "Cream Tube",
            price: 115.2,
          });
        }
        if (i === 5) {
          lists.push({
            image: "https://img.icons8.com/color/48/000000/cosmetic-brush.png",
            cream: "Cosmetic Brush",
            price: 200.5,
          });
        }
      }
      // console.log(this.All);
      // console.log(this.listBuy[i].cream + " : " + this.listBuy[i].checked);
      let Buy = JSON.stringify(lists);
      this.router.navigate(["buy", Buy]);
    }
  }
}
