import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategori Listesi";
  categories: Category[] = [
    { id: 1, name: "Supla" },
    { id: 2, name: "Avizeler" },
    { id: 3, name: "Tepsiler" },
    { id: 4, name: "Sunumluk" },
    { id: 5, name: "Sepet" }];
  ngOnInit(): void {
  }

}
