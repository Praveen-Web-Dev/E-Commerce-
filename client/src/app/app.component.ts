import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Layout/header/header.component";
import { HttpClient } from '@angular/common/http';
import { product } from './Shared/Models/product';
import { Pagination } from './Shared/Models/pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  baseUrl = 'http://localhost:5000/api/'
  private http = inject(HttpClient); 
  products: product[] =[];

  ngOnInit(): void {
    this.http.get<Pagination<product>>(this.baseUrl+'product').subscribe({
      next: response=> this.products = response.data,
      error: error=> console.log(error),
      complete: ()=> console.log('complete')
    })
  }

  title = 'Skinet';
}
