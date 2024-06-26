import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent implements OnInit{

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items: [
                  {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-left',
                    routerLink: ''

                  },
                  {
                    label: 'Números',
                    icon: 'pi pi-dollar',
                    routerLink: 'numbers'
                  },
                  {
                    label: 'No comunes',
                    icon: 'pi pi-globe',
                    routerLink: 'uncommons'
                  },
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                items: [
                  {
                    label: 'Custom Pipes',
                    icon: 'pi pi-cog',
                    routerLink: 'custom'
                  }
                ]
            }
        ];
    }

}
