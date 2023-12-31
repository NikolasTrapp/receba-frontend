import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  items: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  menuSettings: MenuItem[] = [];

  ngOnInit(): void {
    this.menuSettings = [
      {
        label: 'Options',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
          }
        ]
      },
      {
        label: 'Navigate',
      }
    ];
  }

}
