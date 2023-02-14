import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from './product';
import { ProductService } from './productservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
    .p-field{
      margin-left: 0.25em;
    }
`,
  ],
})
export class AppComponent implements OnInit {
  texts: string[] = ['111', '222'];

  results: string[];
  cities: Status[];

  selectedCities: Status[];
  items: MenuItem[];
  items2: MenuItem[];
  items3: MenuItem[];
  items4: MenuItem[];
  items5: MenuItem[];

  //table
  productDialog: boolean;
  products: Product[];
  product: Product;
  selectedProducts: Product[];
  submitted: boolean;
  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.cities = [
      { name: 'All', code: '' },
      { name: 'Open', code: 'Open' },
      { name: 'Closed', code: 'Closed' },
      { name: 'Cancelled', code: 'Cancelled' },
      { name: 'Rejected', code: 'Rejected' },
    ];

    this.items = [
      { label: 'Reset Layout', icon: 'pi pi-refresh', command: () => {} },
    ];

    this.items2 = [
      { label: 'Add in batches', icon: 'pi pi-upload', command: () => {} },
    ];
    this.items3 = [
      { label: 'Copy selection', icon: 'pi pi-copy', command: () => {} },
      { label: 'Cancel selections', icon: 'pi pi-trash', command: () => {} },
    ];

    this.items4 = [
      { label: 'approve in batches', icon: 'pi pi-upload', command: () => {} },
    ];
  }

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data));
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(
          (val) => !this.selectedProducts.includes(val)
        );
        this.selectedProducts = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        this.product.id = this.createId();
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}

interface Status {
  name: string;
  code: string;
}
