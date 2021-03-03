import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-p1-input",
  templateUrl: "./p1-input.page.html",
  styleUrls: ["./p1-input.page.scss"],
})
export class P1InputPage implements OnInit {
  list: any = [
    {
      title: "เกมดูดโลก ตะลุยด่านมหัศจรรย์",
      genre: "https://img.icons8.com/color/48/000000/action.png",
      review: "8",
    },
    {
      title: "13 ชม. ทหารลับแห่งเบนกาซี",
      genre: "https://img.icons8.com/color/48/000000/drama.png",
      review: "9",
    },
    {
      title: "จูราสสิค เวิลด์: อาณาจักรล่มสลาย",
      genre: "https://img.icons8.com/color/48/000000/sci-fi.png",
      review: "10",
    },
    {
      title: "กังฟูแพนด้า",
      genre: "https://img.icons8.com/color/48/000000/cartoon-boy.png",
      review: "7",
    },
  ];
  constructor(public router: Router) {}

  ngOnInit() {}

  presentPrompt(tmpitem: any){
    let P2EditPage = JSON.stringify(tmpitem);
    this.router.navigate(["p2-edit", P2EditPage]);
  }
  
}
