import { Component, OnInit } from '@angular/core';
import {RepoService} from "../../core/services/repo-service/repo.service";
import {Subscription} from "rxjs";
import {Repository} from "../../core/models/repository";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  repoSub : Subscription | any;
  repoList : Repository[] = [];

  constructor(private repositoryService : RepoService) { }

  ngOnInit(): void {
    this.repoSub = this.repositoryService.get().subscribe(
      obs => this.repoList = [...obs]
    )
  }
  ngOnDestroy(): void {
    this.repoSub?.unsubscribe();
  }

}
