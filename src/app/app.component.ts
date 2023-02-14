import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

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
export class AppComponent {
  texts: string[] = ['111', '222'];

  results: string[];
  cities: Status[];

  selectedCities: Status[];
  items: MenuItem[];
  items2: MenuItem[];
  items3: MenuItem[];
  items4: MenuItem[];
  items5: MenuItem[];
  constructor() {
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
}

interface Status {
  name: string;
  code: string;
}
