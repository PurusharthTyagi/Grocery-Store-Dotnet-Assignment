import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-add-product-c',
  templateUrl: './add-product-c.component.html',
  styleUrls: ['./add-product-c.component.css']
})
export class AddProductCComponent implements OnInit {

  createProductFrom!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createProductFrom = this.fb.group({
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
  }

  //#region Getters
  get ProductName(): FormControl {
    return this.createProductFrom.get('productName') as FormControl;
  }
  get ProductDescription(): FormControl {
    return this.createProductFrom.get('productDescription') as FormControl;
  }
  get Category(): FormControl {
    return this.createProductFrom.get('category') as FormControl;
  }
  get AvailableQuantity(): FormControl {
    return this.createProductFrom.get('availableQuantity') as FormControl;
  }
  get Price(): FormControl {
    return this.createProductFrom.get('price') as FormControl;
  }
  get Discount(): FormControl {
    return this.createProductFrom.get('discount') as FormControl;
  }
  get Img(): FormControl {
    return this.createProductFrom.get('img') as FormControl;
  }
  get Specification(): FormControl {
    return this.createProductFrom.get('specification') as FormControl;
  }
  //#endregion


  create() { 
    this.productsService.addProduct(this.createProductFrom.value).subscribe({
      next : (product) => {
        this.router.navigate(['dashboard'])
      } 
    })
  }

}

