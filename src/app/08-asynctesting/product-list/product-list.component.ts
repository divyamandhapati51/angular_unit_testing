import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchText: string;
  tempProductList: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe((data) => {
      this.tempProductList = data;
    });
  }
  filterProducts() {
    let val = this.searchText;
    this.productService.filterProductList(val).then((data) => {
      this.tempProductList = data;
    });
  }
}
