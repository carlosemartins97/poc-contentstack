import { Component, Input, OnInit } from '@angular/core';
import { Plans } from 'src/app/core/models/contentstack.model';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {

  @Input() plan: Plans;

  constructor() { }

  ngOnInit(): void {
  }

}
