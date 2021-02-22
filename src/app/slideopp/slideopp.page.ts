import { AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slideopp",
  templateUrl: "./slideopp.page.html",
  styleUrls: ["./slideopp.page.scss"],
})
export class SlideoppPage implements OnInit {
  countrylist = [
    {
      countryname: "Thailand",
      countrypic: "https://img.icons8.com/color/48/000000/t.png",
      capital: "Bangkok",
    },
    {
      countryname: "Singapore",
      countrypic: "https://img.icons8.com/color/48/000000/s.png",
      capital: "Singapore",
    },
    {
      countryname: "Myanmar",
      countrypic: "https://img.icons8.com/color/48/000000/m.png",
      capital: "Nepidor",
    },
  ];

  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}
  async presentConfirm(tmpitem: any) {
    let alert = this.alertCtrl.create({
      // title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    (await alert).present();
  }

  async presentPrompt(tmpitem: any) {
    let alert = this.alertCtrl.create({
      // title: "Login",
      inputs: [
        {
          name: "incountryname",
          placeholder: "countryname",
          value: tmpitem.countryname,
        },
        {
          name: "incountrypic",
          placeholder: "countrypic",
          type: tmpitem.countrypic,
        },
        {
          name: "incountrytal",
          placeholder: "capital",
          type: tmpitem.capital,
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {
            console.log("Cancel clicked");
          },
        },
        {
          text: "Login",
          handler: (data) => {
            if (
              data.incountryname == "" ||
              data.incountrypic == "" ||
              data.incapital == ""
            ) {
              return false;
            } else {
              for (let i = 0; i < this.countrylist.length; i++) {
                if (this.countrylist[i] == tmpitem) {
                    this.countrylist[i].countryname = data.incountryname;
                    // this.countrylist[i].countrypic = data.incountrypic;
                    // this.countrylist[i].capital = data.incountrytal;
                }
              }
              return false;
            }
          },
        },
      ],
    });
    (await alert).present();
  }
}
