import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
                
  allCountry:any=''
  constructor(private service:HttpService,private title:Title) {}
  ngOnInit(): void { 
    this.getAllcountry()
    this.title.setTitle('Add employee')
  } 

getAllcountry(){
  this.service.getallcountry()
  .subscribe((pavan:any)=>{
    this.allCountry=pavan
  })
}

  onSubmit(f:NgForm){
    let obj={

name:f.value.name,
mobileNo:f.value.phoneno,
department:f.value.departmentit,
status:f.value.status,
country:f.value.country
    }
  
  this.service.addemprecord(obj)
  .subscribe((Response:any)=>{
    console.log(Response)
  })
  }
}