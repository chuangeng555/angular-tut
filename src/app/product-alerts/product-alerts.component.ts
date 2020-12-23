import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  // to receive the product data --> property value passes in from the component parent , ProductListComponent
  @Output() notify = new EventEmitter();
  //Output --> pass component to parent component

  constructor() {}

  ngOnInit() {}
}
