import { crudapi } from "./crudapi";
import { AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-firebase",
  templateUrl: "./firebase.page.html",
  styleUrls: ["./firebase.page.scss"],
})
export class FirebasePage implements OnInit {
  tmpobj: any;
  tmpobjs: any;

 

  constructor(private alertCtrl: AlertController, private getcrud: crudapi) {}

  ngOnInit() {
    this.getcrud.readData().subscribe((data) => {
      this.tmpobj = data.map((e) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          mycountryname: e.payload.doc.data()["countryname".toString()],
          myflag: e.payload.doc.data()["flag".toString()],
          mycapital: e.payload.doc.data()["capital".toString()],
          mypop: e.payload.doc.data()["pop".toString()],
        };
      });
      console.log(this.tmpobj);
    });
  }

  async presentConfirm(tmpitem: any) {
    console.log(tmpitem.id, "id");
    console.log(tmpitem, "tmpitem");
    let alert = this.alertCtrl.create({
      //title: 'Confirm purchase',
      message: "Do you want to delete ?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Deleted");

            //this.deleteCountryItem(tmpitem);

            this.getcrud.delData(tmpitem.id); //del rowfrom DB
          },
        },
      ],
    });
    (await alert).present();
  }

  async presentPromptADD() {
    let alert = this.alertCtrl.create({
      // title: "Login",
      inputs: [
        {
          name: "incountryname",
          placeholder: "country name",
        },
        {
          name: "incapital",
          placeholder: "capita",
        },
        {
          name: "inflag",
          placeholder: "flag",
        },
        {
          name: "inpop",
          placeholder: "pop",
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
            let tmpobj =
              //db : inputform
              {
                countryname: data.incountryname,
                capital: data.incapital,
                flag: data.inflag,
                pop: data.inpop,
              };
            this.getcrud.createData(tmpobj);
            console.log(tmpobj);
          },
        },
      ],
    });
    (await alert).present();
  }

  // === EDIT ==========================================

  async presentPromptEdit(rowid: any) {
    let newlist = {};
    let alert = this.alertCtrl.create({
      // title: "Login",
      inputs: [
        {
          name: "incountryname",
          placeholder: "country name",
          type: rowid.mycountryname,
        },
        {
          name: "incapital",
          placeholder: "capital",
          type: rowid.mycapital,
        },
        {
          name: "inflag",
          placeholder: "flag",
          type: rowid.myflag,
        },
        {
          name: "inpop",
          placeholder: "pop",
          type: rowid.mypop,
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
          text: "Edit",
          handler: (data) => {
            if (
              data.incountryname == "" ||
              data.inflag == "" ||
              data.incapital == "" ||
              data.inpop == ""
            )
              //show toast
              return false;
            else {
              //update here
              newlist["countryname"] = data.incountryname;
              newlist["capital"] = data.incapital;
              newlist["flag"] = data.inflag;
              newlist["pop"] = data.inpop;
              this.getcrud.updateData(rowid.id, newlist);
            } //else
          }, //handler
        }, //update
      ],
    });
    (await alert).present();
  }
}
