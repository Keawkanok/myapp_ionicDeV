import { Component, OnInit, AfterContentInit,ViewChild } from "@angular/core";
declare var google;
@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnInit, AfterContentInit {
  map;
  @ViewChild('map') element;

  constructor() {}

  ngOnInit() {}
  ngAfterContentInit(): void {
    this.map = new google.maps.Map(this.element.nativeElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
}
