import {Injectable} from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList = [
    {
      title : 'brown eggs',
      type: 'dairy',
      file_name: '0.jpg',
      height: 200,
      width: 400,
      price: 20,
      rating: 5
    },
    {
      title : 'fresh cream',
      type: 'dairy',
      file_name: '0.jpg',
      height: 200,
      width: 400,
      price: 20,
      rating: 5
    },
    {
      title : 'boiled eggs',
      type: 'dairy',
      file_name: '0.jpg',
      height: 200,
      width: 400,
      price: 20,
      rating: 5
    },
    {
      title : 'fresh milk ',
      type: 'dairy',
      file_name: '0.jpg',
      height: 200,
      width: 400,
      price: 20,
      rating: 5
    },
  ];
  constructor() {
  }
  public getProductList(){
    return of(this.productList);
  }
  public filterProductList(searchString: string) {
    return of(
      this.productList.filter(
        product => product.title.toLowerCase().indexOf(searchString) > -1)
     ).toPromise();
  }


}
