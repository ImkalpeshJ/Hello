import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { 
  
  }
// baseurl:string='http://localhost:8080/';
baseurl:string=environment.baseurl

login(obj:any){
 return(this.http.post(`${this.baseurl}register/login`,obj));
}

 
getAlldata(){
 return(this.http.get(`${this.baseurl}employee/get-all-employee`));
}

getrecordbyid(id:any){
  return(this.http.get(`${this.baseurl}get-employee-by-id/${id}`))
}

getallcountry(){
 return(this.http.get(`${this.baseurl}get-all-countries`))
}

addemprecord(obj:any){
  return(this.http.post(`${this.baseurl}post-employee`,obj,{
    responseType:'text'
  }))

}

UpdateRecord(obj:any){
  return(this.http.put(`${this.baseurl}post-employee`,obj,{
    responseType:'text'
  }))
}

DeleteRecord(id:any){
  return (this.http.delete(`${this.baseurl}delete-employee/${id}`, 
  {responseType:'text'}))     
}

}

