import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../details/model/employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  @Input() parentdata:Employee=<Employee>{};
  issubmitDissabled:boolean=true;
  backendResponse:string='';
  allCountry:any[]=[];
  
  constructor(private service:HttpService) { }


  ngOnInit(): void {
    // console.log(this.parentdata)
    this.getallcountry()

  }

  getallcountry(){
    this.service.getallcountry()
    .subscribe((Response:any)=>{
      this.allCountry=Response
    })
  }

  onupdate(){
    this.parentdata.updatedby=sessionStorage.getItem("username");
    this.parentdata.updateddtm=Date.now();
    this.service.UpdateRecord(this.parentdata)
    .subscribe((response:any)=>{
      console.log(response);
      this.issubmitDissabled=false;
      this.backendResponse=response;
    })
  }
}
