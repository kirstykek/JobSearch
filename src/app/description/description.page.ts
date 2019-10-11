import { Component, OnInit } from '@angular/core';
import { JobsearchService } from '../jobsearch.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {
id
job
  constructor(public jobService:JobsearchService,public router:Router,public activatedRoute:ActivatedRoute,) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getJob(this.id);
  }
getJob(id){
  this.jobService.jobDiscription(id).subscribe((data)=>{
    this.job=data;
    console.log(this.job);
  })
}
}
