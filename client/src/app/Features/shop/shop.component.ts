import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../Core/services/shop.service';
import { product } from '../../Shared/Models/product';
import {MatCard} from '@angular/material/card';
import {MatDialog} from '@angular/material/dialog';
import { ProductItemComponent } from "./product-item/product-item.component";
import { MatButton } from '@angular/material/button';
import { FiltersDialogComponent } from './filters-dialog/filters-dialog.component';
import { MatIcon } from '@angular/material/icon';
import { concat } from 'rxjs';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCard,MatIcon,
     ProductItemComponent, MatButton],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  private shopService = inject(ShopService)
  private dialogService = inject(MatDialog)
  products: product[] =[];
  selectedBrands: string[] =[];
  selectedTypes: string[] = [];

  ngOnInit(): void {
    this.initializeShop();
  }
  initializeShop(){
    this.shopService.getBrands();
    this.shopService.getTypes();
    this.shopService.getProducts().subscribe({
      next: response=> this.products = response.data,
      error: error=> console.log(error),
    })
    }

    openFiltersDialog(){
      const dialogRef = this.dialogService.open(FiltersDialogComponent,{
        minWidth:'500px',
        data:{
          selectedBrands:this.selectedBrands,
          selectedTypes:this.selectedTypes
        }
      })

      dialogRef.afterClosed().subscribe({
        next:result =>{
          if(result){
            console.log(result);
            this.selectedBrands = result.selectedBrands;
            this.selectedTypes = result.selectedTypes;
          }
        }
      })
    }
}
