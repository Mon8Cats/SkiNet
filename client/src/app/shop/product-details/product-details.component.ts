import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: IProduct;

  constructor(private shopServie: ShopService, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const ids = this.activateRoute.snapshot.paramMap.get('id');
    let id = 1;
    if (ids){
      id = +ids;
    }
    this.shopServie.getProduct(id).subscribe(product => {
      if (product){
        this.product = product;
      }
    }, error => {
      console.log(error);
    });
  }

}
