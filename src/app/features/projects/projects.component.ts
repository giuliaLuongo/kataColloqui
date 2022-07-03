import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectSub : Subscription | any;
  projectList : Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.projectSub = this.projectService.get().subscribe(
      obs => this.projectList = [...obs]
    )
  }
  ngOnDestroy(): void {
    this.projectSub?.unsubscribe();
  }

}
