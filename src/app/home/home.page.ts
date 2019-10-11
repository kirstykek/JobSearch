import { Component } from '@angular/core';
import {JobsearchService} from '../jobsearch.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
name=[]
job
jobData
  constructor( public jobsearchService:JobsearchService) {
this.jobsearchService.JobSearch().subscribe((data)=>
{
  this.jobData=data
  console.log(this.jobData);

  

for (let i=0;i<50;i++) 
{
  this.name.push({name:this.jobData[i]
  })

}

});
  }
}

 

  


