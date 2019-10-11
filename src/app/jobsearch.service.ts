import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsearchService {
  description(id: any) {
    throw new Error("Method not implemented.");
  }
job=[]
jobz=[]
id
  constructor(public http:HttpClient) { }

  JobSearch(){
    return this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/jobs')
  }
  jobDiscription(ids){
    return this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/job?id='+ids)
  }
  GetJob(){
    return this.job
  }
  GetId(){
    return this.id
  }
}


