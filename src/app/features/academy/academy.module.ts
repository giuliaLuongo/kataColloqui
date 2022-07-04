import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademyComponent } from './academy.component';
import { AcademyDetailComponent } from './academy-detail/academy-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes : Routes = [
  {path: '', component: AcademyComponent},
  {path: ':id', component: AcademyDetailComponent},

]

@NgModule({
  declarations: [
    AcademyComponent,
    AcademyDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AcademyModule { }
