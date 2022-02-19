import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';
import { User } from '../../shared/user';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  user: User;
  items: MenuItem[];
  displayUserInfo: boolean = false;

  constructor(private contractsService: ContractsService) { }

  ngOnInit(): void {
    this.user = this.contractsService.getClientInfo();
    
    this.items = [
      {
        label: 'Contracts',
        icon: 'pi pi-fw pi-user',
        items: [
          {
              label: 'New', 
              icon: 'pi pi-fw pi-plus',
              items: [
                  {label: 'Project'},
                  {label: 'Other'},
              ]
          },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Documets',
        icon: 'pi pi-fw pi-file',
        items: [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
        label: 'Payout',
        icon: 'pi pi-fw pi-credit-card',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        ]
      },
      {
        label: 'Time',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        ]
      }
    ];
  }

  showUserInfo(){
    this.displayUserInfo = true;
  }
}
