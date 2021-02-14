import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  getuser:String;
  getpass:String;
  lists:String;
  All = "";
  radio:String;
  radios:String;
  cblist: any = [
    { id: 1, title: "Pepperoni", value: "pep", checked: true ,iconname: "airplane-outline", dis: false},
    { id: 2, title: "Saugage", value: "sau", checked: false ,iconname: "bicycle-outline", dis: true},
    { id: 3, title: "Mushroom", value: "mus", checked: true ,iconname: "beer-outline" , dis: false},
  ];
  RADIO : any = [
    { id: 0, title: 'radio_1',value:'radio_1'},
    { id: 1, title: 'radio_2',value:'radio_2'},
    
  ];
  RADIOS : any = [
    { id: 1, title: 'Sardine', value:'Sardine'},
    { id: 2, title: 'Anchovy', value:'Anchovy' },
    { id: 3, title: 'Mackerel', value:'Mackerel' },
  ];

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  myFuntion(text :any){
    let lists = [];
    for (let i = 0; i < this.cblist.length; i++) {
      if(this.cblist[i].checked) {
        if(i === 0) {
          lists.push('Pepperoni');
        }
        if(i === 1) {
          lists.push('Saugage')
        }if(i === 2) {
          lists.push('Mushroom');
        }
      }
      console.log(this.cblist[i].title + " : " + this.cblist[i].checked);
      console.log(this.All); 
      this.All = lists.toString();
      this.presentToast(text);
    }
  }

  radioGroupChange() {
    console.log(this.radio);
  }
  radioGroupChanges(){
    console.log(this.radios);
  }
  async presentToast(text: any) {
    let toast =  await this.toastCtrl.create({
      message: 'Username : ' + this.getuser + 
              '\n'+ 'Password : '+ this.getpass + 
              '\n'+ this.All + 
              '\n'+ 'FOR OF RADIO : '+ this.radio +
              '\n'+ 'YOUR SELECTION: MACKEREL: ' + this.radios,
      duration: 2500,
      position: 'bottom'
    });
    toast.present();
  }

}
