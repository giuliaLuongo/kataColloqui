import {Component, OnDestroy, OnInit} from '@angular/core';
import {AcademyService} from "../../core/services/academy.service";
import {Subscription} from "rxjs";
import {Academy} from "../../core/models/academy";

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss']
})
export class AcademyComponent implements OnInit, OnDestroy {

  constructor(private academyService : AcademyService) { }

  academySub : Subscription | any;

  academyList : Academy[] = [];

  ngOnInit(): void {
    this.academySub = this.academyService.get().subscribe(
      obs => this.academyList = [...obs]
    )
  }

  ngOnDestroy(): void {
    this.academySub?.unsubscribe();
  }

}
