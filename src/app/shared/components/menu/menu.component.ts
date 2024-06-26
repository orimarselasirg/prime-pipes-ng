import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'New', icon: 'pi pi-desktop' },
            { label: 'Search', icon: 'pi pi-search' }
        ];
    }

}
