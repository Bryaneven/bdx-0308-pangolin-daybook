import { Component, OnInit } from '@angular/core';
import { DaybookService } from 'src/app/shared/daybook.service';
import { Daybook } from 'src/app/Models/daybook';
import { TasksByImportance } from 'src/app/Models/tasks-by-importance';

@Component({
  selector: 'dbk-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  daybookSelected: Daybook;
  sortedTasks: TasksByImportance[];

  constructor(private daybookService: DaybookService) { }

  ngOnInit(): void {

    this.daybookService.getTodayDaybook().subscribe((daybook) => {
      this.daybookSelected = daybook;
      this.sortedTasks = daybook.getTasksByImportance();
      console.log(this.sortedTasks);
      console.log(this.daybookSelected);
    });

  }

  classMethod(taskArray) {
    if (taskArray.name === 'Primodiales') {
      return 'priorities primodiales';
    } else if (taskArray.name === 'Importantes') {
      return 'priorities importantes';
    } else if (taskArray.name === 'Facultatives') {
      return 'priorities facultatives';
    } else {
      return 'nonfinies';
  }
}

displayTaskArray(taskArray) {
  if (taskArray.tasks === []) {
    return false;
  } else {
    return true;
  }

}
}
