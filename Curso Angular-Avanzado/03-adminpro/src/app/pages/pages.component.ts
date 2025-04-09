import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { BreadcrumbsComponent } from "../shared/breadcrumbs/breadcrumbs.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pages',
  imports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent, RouterModule],
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent {

}
