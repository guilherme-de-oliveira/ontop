import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.scss']
})
export class WelcomeBannerComponent implements OnInit {
  @Input() type = '';
  user: User;
  
  constructor(private contractsService: ContractsService) { }

  ngOnInit(): void {
    this.user = this.contractsService.getClientInfo();
    
    console.log(this.user);
  }
}
