import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public products = [];

  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    this._productsService
      .getProducts()
      .subscribe(data => (this.products = data));
  }
}
