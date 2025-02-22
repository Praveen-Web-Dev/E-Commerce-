import { Component } from '@angular/core';
import{MatIconModule} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatBadge} from '@angular/material/badge';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,MatButton,MatBadge
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
