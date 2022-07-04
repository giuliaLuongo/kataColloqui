import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

const routes : Routes = [
  {path: '', component: ProjectsComponent},
  {path: ':id', component: ProjectDetailComponent}
]



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ProjectsModule { }
