import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title:string = "Tüm Ürünler"
  categories : Category[] = [
    {
      id:1,
      name:"Bilgisayar"
    },
    {
      id:2,
      name:"Cep Telefonu"
    },
    {
      id:3,
      name:"Müzik Aletleri"
    },
    {
      id:4,
      name:"Televizyon"
    },
    {
      id:5,
      name:"Mobilya"
    },{
      id:6,
      name:"Ev Aletleri"
    }
  ]
  ngOnInit(): void {
  }

}
