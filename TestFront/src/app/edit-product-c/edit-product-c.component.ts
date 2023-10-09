import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/models';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-edit-product-c',
  templateUrl: './edit-product-c.component.html',
  styleUrls: ['./edit-product-c.component.css']
})
export class EditProductCComponent implements OnInit {

  editProductForm!: FormGroup;

  productDetails: Product = {
    productId: '',
    productName: '',
    productDescription: '',
    category: '',
    availableQuantity: 0,
    price: 0,
    discount: 0,
    img: '',
    specification: ''
  }

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {

    this.editProductForm = this.fb.group({
      productName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
        ],
      ],
      productDescription: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
        ],
      ],
      category: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
        ],
      ],
      availableQuantity: [
        '',
        [
          Validators.required,
          Validators.maxLength(1),
        ],
      ],
      price: [
        '',
        [
          Validators.required,
        ]
      ],
      discount: [
        '',
        [
          Validators.maxLength(3),
          Validators.required,
        ]
      ],
      img: [
        '',
        [
          Validators.required,
        ]
      ],
      specification: [
        '',
        [
          Validators.required,
        ]
      ],
    });

    this.route.paramMap.subscribe({
      next: (params) => {
        const productId = params.get('productId');

        if (productId) {
          this.productsService.getProduct(productId).subscribe({
            next: (response) => {
              this.productDetails = response;
            }
          });
        }
      }
    })
  }

  //#region Getters
  get ProductName(): FormControl {
    return this.editProductForm.get('productName') as FormControl;
  }
  get ProductDescription(): FormControl {
    return this.editProductForm.get('productDescription') as FormControl;
  }
  get Category(): FormControl {
    return this.editProductForm.get('category') as FormControl;
  }
  get AvailableQuantity(): FormControl {
    return this.editProductForm.get('availableQuantity') as FormControl;
  }
  get Price(): FormControl {
    return this.editProductForm.get('price') as FormControl;
  }
  get Discount(): FormControl {
    return this.editProductForm.get('discount') as FormControl;
  }
  get Img(): FormControl {
    return this.editProductForm.get('img') as FormControl;
  }
  get Specification(): FormControl {
    return this.editProductForm.get('specification') as FormControl;
  }
  //#endregion

  update() {
    this.productsService.updateProduct(this.productDetails.productId, this.productDetails).subscribe({
      next: (response) => {
        this.router.navigate(['dashboard'])
      }
    })
  }
}
