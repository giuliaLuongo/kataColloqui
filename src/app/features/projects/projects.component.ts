import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../core/services/project-service/project.service";
import {Subscription} from "rxjs";
import {Project} from "../../core/models/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectSub : Subscription | any;
  projectList : Project[] = [];

  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.projectSub = this.projectService.get().subscribe(
      obs => this.projectList = [...obs]
    )
  }
  ngOnDestroy(): void {
    this.projectSub?.unsubscribe();
  }

}
