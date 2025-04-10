import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { ListingComponent } from './listing/listing.component';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    imports: [MaterialModule, TablerIconsModule, ListingComponent]
})
export class AppEmailComponent {
  constructor() {}
}
