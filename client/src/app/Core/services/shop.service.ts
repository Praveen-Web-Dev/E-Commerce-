import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { product } from '../../Shared/Models/product';
import { Pagination } from '../../Shared/Models/pagination';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
   baseUrl = 'http://localhost:5000/api/'
    private http = inject(HttpClient);
    types: string[] = [];
    brands: string[] = [];

  getProducts(){
    return this.http.get<Pagination<product>>(this.baseUrl+'product?pagesize=20')
  }

  getBrands(){
    if(this.brands.length>0) return;
    return this.http.get<string[]>(this.baseUrl+'product/brands').subscribe({
      next: response => this.brands = response
    })
  }

  getTypes(){
    if(this.types.length>0) return;
    return this.http.get<string[]>(this.baseUrl+'product/types').subscribe({
      next: response => this.types = response
    })
  }
}
