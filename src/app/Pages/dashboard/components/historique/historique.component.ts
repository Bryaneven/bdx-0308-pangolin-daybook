import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';

@Component({
  selector: 'dbk-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  @Input() weekDaybookList: Daybook[];
  @Output() daybookChosen = new EventEmitter<number>();
  responsiveOptions: [];

  constructor(public daybookService: DaybookService) { }

    ngOnInit() {
  }

  chooseDaybook(id) {
    this.daybookChosen.emit(id);
  }
}
