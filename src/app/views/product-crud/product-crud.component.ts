import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: "Product Registration",
      icon: "storefront",
      routeUrl: "/products"
    };
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }

}
