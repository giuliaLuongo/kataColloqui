import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Project} from "../../../core/models/project";
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../../core/services/project-service/project.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  projectSub : Subscription | undefined;
  projectId : number | undefined;
  project : Project | any;

  constructor(private projectService : ProjectService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.projectSub = this.projectService.getById(this.projectId).subscribe(
      obs => {this.project = {...obs}}
    )
  }

  ngOnDestroy(): void {
    this.projectSub?.unsubscribe()
  }

}
