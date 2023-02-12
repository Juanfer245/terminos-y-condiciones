import { Component, Inject, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/Product';
import { ProductService } from 'src/app/services/cursos-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

@Input('ngModel')


export class ProductFormComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    imageURL: '',
    price: 0,
    _id: ''
  };
  edit: boolean = false;

  constructor( 
    @Inject(String)

    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.productService.getProduct(params['id']).subscribe(
          res => {
            console.log(res);
            this.product = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

  updateProduct() {
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id, this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/product'])
        },
        err => console.log(err)
      )
  }

}
