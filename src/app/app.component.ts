import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
  constructor() {
    this.cities = [
      { name: 'All', code: '' },
      { name: 'Open', code: 'Open' },
      { name: 'Closed', code: 'Closed' },
      { name: 'Cancelled', code: 'Cancelled' },
      { name: 'Rejected', code: 'Rejected' },
    ];

    this.items = [{ label: 'Reset', icon: 'pi pi-refresh', command: () => {} }];

    this.items2 = [
      { label: 'Mass Upload', icon: 'pi pi-upload', command: () => {} },
    ];
  }
}

interface Status {
  name: string;
  code: string;
}
