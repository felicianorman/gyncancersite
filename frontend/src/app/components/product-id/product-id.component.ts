import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css'],
})
export class ProductIdComponent implements OnInit {
  @Input() public product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      console.log('Product ID from route:', productId);

      this.productService.getProducts().valueChanges.subscribe((result) => {
        console.log('GraphQL Response:', result);
        const products = (result.data as any)['products'].data;

        console.log('All products:', products);

        this.product = products.find((product: any) => {
          return product.attributes.productId == productId;
        });

        console.log('Found product:', this.product);
      });
    });
  }
}
