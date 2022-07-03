import {Component, OnDestroy, OnInit} from '@angular/core';
import {AcademyService} from "../../../core/services/academy-service/academy.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Academy} from "../../../core/models/academy";

@Component({
  selector: 'app-academy-detail',
  templateUrl: './academy-detail.component.html',
  styleUrls: ['./academy-detail.component.scss']
})
export class AcademyDetailComponent implements OnInit, OnDestroy {

  academySub : Subscription | undefined;
  academyId : number | undefined;
  academy : Academy | any;

  constructor(private academyService : AcademyService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.academyId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.academySub = this.academyService.getById(this.academyId).subscribe(
      obs => {this.academy = {...obs}}
    )

  }

  ngOnDestroy(): void {
    this.academySub?.unsubscribe()
  }

}
