import { Component, OnInit } from '@angular/core';
import { ProductList } from './services/productList.service';

interface Product {
  in_potential_products: boolean;
  asin: string;
  price: number;
  weight: number;
  updated_at: number;
  name: string;
  shipping_weight: null;
  domain: string;
  votes_count: number;
  daily_cashflow: number;
  currency: string;
  img: string;
  daily_sales: number;
  stars: number;
  bsr_value: number;
  brand_class: null;
  link: string;
  bsr_category: string;
  brand: string;
}
interface Products {
  products: Product[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ProductList ]
})
export class AppComponent implements OnInit {
  products:Product[];
  show:boolean = true;
  basket:boolean = false;

  constructor(private service: ProductList){
  }

  switcher(product){
    console.log(this.products)
    if(product.in_potential_products){
      product.in_potential_products = false;
    }
    else{
      product.in_potential_products = true;
    }
  }

  basketSwitcher(){
    console.log(this.basket)
    if(this.basket){
        this.basket = false;
    }
    else{
      this.basket = true;
    }
  }

  getTotal(){
    let result = 0;
    for(let i=0; i<this.products.length; i++){
      if(this.products[i].in_potential_products){
        result += this.products[i].price;
      }
    }
    return result.toString();
  }
  ngOnInit(): void {
    this.service.getProducts().subscribe((data:Products)=>{
      console.log(data.products)
      this.products = data.products;
    })
  }
}
