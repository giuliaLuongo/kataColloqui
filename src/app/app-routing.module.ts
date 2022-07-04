import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren : ()=> import('src/app/features/home/home.module').then(m => m.HomeModule)},
  {path: 'academy', loadChildren : ()=> import('src/app/features/academy/academy.module').then(m => m.AcademyModule)},
  {path: 'projects', loadChildren : ()=> import('src/app/features/projects/projects.module').then(m => m.ProjectsModule)},
  {path: 'repo', loadChildren : ()=> import('src/app/features/repository/repository.module').then(m => m.RepositoryModule)},
  {path: '**', redirectTo: 'home', pathMatch: "full"},
  {path: '', redirectTo: 'home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
