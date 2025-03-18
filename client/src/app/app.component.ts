import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Layout/header/header.component";
import { product } from './Shared/Models/product';
import { Pagination } from './Shared/Models/pagination';
import { HttpClient } from '@angular/common/http';
import { ShopService } from './Core/services/shop.service';
import { ShopComponent } from "./Features/shop/shop.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
 
  title = 'Skinet';

  
}
