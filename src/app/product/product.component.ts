import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  filterText=""
  products: Product[] = [
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, describtion: "Asus Zenbook", imageUrl: "https://cdn.dsmcdn.com/ty180/product/media/images/20210922/16/135302327/248419356/0/0_org_zoom.jpg" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, describtion: "A4 Tech", imageUrl: "https://cdn.dsmcdn.com/ty180/product/media/images/20210922/16/135302327/248419356/0/0_org_zoom.jpg" },
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, describtion: "Asus Zenbook", imageUrl: "https://cdn.dsmcdn.com/ty180/product/media/images/20210922/16/135302327/248419356/0/0_org_zoom.jpg" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, describtion: "A4 Tech", imageUrl: "https://cdn.dsmcdn.com/ty180/product/media/images/20210922/16/135302327/248419356/0/0_org_zoom.jpg" },
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, describtion: "Asus Zenbook", imageUrl: "https://cdn.dsmcdn.com/ty180/product/media/images/20210922/16/135302327/248419356/0/0_org_zoom.jpg" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, describtion: "A4 Tech", imageUrl: "https://cdn.dsmcdn.com/ty180/product/media/images/20210922/16/135302327/248419356/0/0_org_zoom.jpg" },
  ];
  ngOnInit(): void {
  }
  addToCart(product:Product){
    alertify.success(product.name+" added")
  }
}
