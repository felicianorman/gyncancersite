import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/interfaces/Product';
import { CartService } from 'src/services/cart.service';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss'],
})
export class ProductIdComponent implements OnInit {
  @Input() public product: Product;
  public img: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];

      this.productService.getProducts().valueChanges.subscribe((result) => {
        const products = (result.data as any)['products'].data;

        const productDetail = products.find((product: any) => {
          this.img = product.attributes.img?.data?.attributes?.url || '';
          return product.attributes.productId == productId;
        });

        this.product = productDetail ? productDetail.attributes : null;
      });
    });
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}
