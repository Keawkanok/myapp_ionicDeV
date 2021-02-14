import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mylist",
  templateUrl: "./mylist.page.html",
  styleUrls: ["./mylist.page.scss"],
})
export class MylistPage implements OnInit {
  musiclist: any;
  asean: any;
  constructor(public router: Router) {}

  ngOnInit() {
    this.asean = [
      {
        id: 1,
        national_flag:
          "https://img.icons8.com/color/48/000000/thailand.png",
        population: "69.43 ล้าน",
        religion: "ประกอบด้วยชาวไทยเป็นส่วนใหญ่",
        capital: "กรุงเทพมหานคร",
        country: "Thailand",
        language: "ภาษาไทย เป็นภาษาราชการ",
      },
      {
        id: 2,
        national_flag:
          "https://cdn.countryflags.com/thumbs/brunei/flag-400.png",
        population: "428,962",
        religion: "ประกอบด้วย มาเลย์ 66%, จีน11%,อื่นๆ 23%",
        capital: "บันดาร์ เสรี เบกาวัน",
        country: "Brunei Darussalam",
        language: "ภาษามาเลย์ เป็นภาษาราชการ รองลงมาเป็นอังกฤษและจีน",

      },
      {
        id: 3,
        national_flag:
          "https://cdn1.iconfinder.com/data/icons/ensign-11/512/47_Ensign_Flag_Nation_cambodia-256.png",
        population: "16.25 ล้าน",
        religion: "ประกอบด้วย ชาวเขมร 94%, จีน 4%,อื่นๆ 2%",
        capital: "กรุงพนมเปญ",
        country: "Cambodia",
        language: "ภาษาเขมร เป็นภาษาราชการ รองลงมาเป็นอังกฤษ, ฝรั่งเศส, เวียดนามและจีน",

      },
      {
        id: 4,
        national_flag:
          "https://img.icons8.com/color/48/000000/laos.png",
        population: "7.062 ล้าน",
        religion: "ประกอบด้วย ชาวลาวลุ่ม 68%, ลาวเทิง 22%, ลาวสูง 9% รวมประมาณ 68 ชนเผ่า",
        capital: "นครหลวงเวียงจันทร์",
        country: "Laos",
        language: "ภาษาลาว เป็นภาษาราชการ",

      },
      {
        id: 5,
        national_flag:
          "https://img.icons8.com/color/48/000000/malaysia.png",
        population: "31.53 ล้าน",
        religion: "ประกอบด้วย มาเลย์ 40%, จีน33%, อินเดีย 10%, ชนพื้นเมืองเกาะบอร์เนียว 10%",
        capital: "กรุงกัวลาลัมเปอร์",
        country: "Malaysia",
        language: "ภาษามาเลย์ เป็นภาษาราชการ รองลงมาเป็นอังกฤษและจีน",

      },
      {
        id: 6,
        national_flag:
          "https://img.icons8.com/color/48/000000/myanmar.png",
        population: "53.71 ล้าน",
        religion: "ประกอบด้วยเผ่าพันธุ์ 135 มี 8 เชื้อชาติหลักๆ 8 กลุ่ม คือ พม่า 68%, ไทยใหญ่ 8%, กระเหรี่ยง 7%, ยะไข่ 4% จีน 3% มอญ 2% อินเดีย 2%",
        capital: "เนปีดอ",
        country: "Myanmar",
        language: "ภาษาพม่า เป็นภาษาราชการ",

      },
      {
        id: 7,
        national_flag:
          "https://img.icons8.com/color/48/000000/philippines.png",
        population: "106.7 ล้าน",
        religion: "ประกอบด้วย มาเลย์ 40%, จีน33%, อินเดีย 10%, ชนพื้นเมืองเกาะบอร์เนียว 10%",
        capital: "กรุงมะนิลา",
        country: "Philippines",
        language: "ภาษาฟิลิปิโน และภาษาอังกฤษ เป็นภาษาราชการ รองลงมาเป็น สเปน, จีนฮกเกี้ยน, จีนแต้จิ๋ว ฟิลิปปินส์ มีภาษาประจำชาติคือ ภาษาตากาล็อก",

      },
      {
        id: 8,
        national_flag:
          "https://img.icons8.com/color/48/000000/singapore.png",
        population: "5.639 ล้าน",
        religion: "พุทธ 42.5%, อิสลาม 14.9%, คริสต์ 14.5%, ฮินดู 4%, ไม่นับถือศาสนา 25%",
        capital: "สิงคโปร์",
        country: "Singapore",
        language: "ภาษามาเลย์ เป็นภาษาราชการ รองลงมาคือจีนกลาง ส่งเสริมให้พูดได้ 2 ภาษาคือ จีนกลาง และให้ใช้อังกฤษ เพื่อติดต่องานและชีวิตประจำวัน",

      },
      {
        id: 9,
        national_flag:
          "https://img.icons8.com/color/48/000000/vietnam.png",
        population: "95.54 ล้าน",
        religion: "พุทธนิกายมหายาน 70%, คริสต์ 15%",
        capital: "กรุงฮานอย",
        country: "Vietnam",
        language: "ภาษาเวียดนาม เป็นภาษาราชการ",
      },
      {
        id: 10,
        national_flag:
          "https://img.icons8.com/color/48/000000/indonesia.png",
        population: "267.7 ล้าน",
        religion: "อิสลาม 87%, คริสต์ 10%",
        capital: "จาการ์ตา",
        country: "Indonesia",
        language: "ภาษาอินโดนีเซีย เป็นภาษาราชการ",

      },
    ];
  }
  viewaec(tmpitem: any) {
    let asean = JSON.stringify(tmpitem);
    this.router.navigate(["asean", asean]);
  }
}
