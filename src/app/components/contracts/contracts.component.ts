import { Component, OnInit } from '@angular/core';
import { Contractor } from 'src/app/shared/contractor';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  page: string = "Contracts";
  
  contractors: Contractor[];

  constructor(private contractsService: ContractsService) { }

  ngOnInit(): void {
    this.contractors = this.contractsService.getContractorInfo();
  }

  public get width() {
    
    return window.innerWidth;
  }
}
