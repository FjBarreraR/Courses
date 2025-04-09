import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  constructor(private authService: AuthService){}
}
