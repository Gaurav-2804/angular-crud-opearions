import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  // private productUpdated = new Subject<Product[]>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      this.productService.read().subscribe(products => {
        this.products = products;
        // this.productUpdated.next([...this.products]);
      })
  }

}
