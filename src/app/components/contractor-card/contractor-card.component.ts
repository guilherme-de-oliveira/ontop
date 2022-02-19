import { Component, Input, OnInit } from '@angular/core';
import { Contractor } from 'src/app/shared/contractor';

@Component({
  selector: 'app-contractor-card',
  templateUrl: './contractor-card.component.html',
  styleUrls: ['./contractor-card.component.scss']
})

export class ContractorCardComponent implements OnInit {
  @Input() contractors: Contractor[];
  selectedContractors: Contractor[];


  public innerWidth: any;
  
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  
  public get width() {   
    return (window.innerWidth < 600) ? 'pi-ellipsis-h': 'pi-ellipsis-v';
  }
}
