import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef  } from 'ngx-bootstrap/modal';
import { Employee } from '../details/model/employee';
import { Title } from '@angular/platform-browser';
import { DialogService } from '../dialog.service';
import { ToastrService  } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service:HttpService,
    private modalservice:BsModalService, 
    private title:Title,
    private dialogservice:DialogService,
    private toaster:ToastrService) { }

empdata:any[]=[]
isSelect:boolean=false
ModalRef! :BsModalRef;
empobj=<Employee>{};
p:number=1
items:string=''
isChecked = true  
nameSearch:string=''
config = {
  animated: true,
  
  ignoreBackdropClick: true,
  class: "alert alert-danger"
};
 
  ngOnInit(): void {
    this.getAllrecords();
    this.title.setTitle("project | Dashbord")
  }

  getAllrecords() {
    this.service.getAlldata()
    .subscribe((response:any)=>{
      console.log(response)
      this.empdata=response
    
    })
  }

  onedit(item:any){
    console.log(item)
    this.isSelect=true
    this.empobj=item
  } 
  

  isRadioCheck(){
    if (this.isSelect) {
      return true;
    }else{
      return false;
    }    
  }

  onUpdate(popup: TemplateRef<any>){
      if(this.isRadioCheck()){
        //update a record
        this.ModalRef = this.modalservice.show(        
          popup, this.config);
      }else{
        // alert("Please Select a Record to Update ");
        this.toaster.warning("please select record to update")
      }
  }

  ondelete(){
    if(this.isRadioCheck()){
      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        // console.log(res)
        if(res){
this.service.DeleteRecord(this.empobj.id)
.subscribe((response:any)=>{
  console.log(response)
  this.getAllrecords()

})
        }else{

        }
      })
    }else{
    // alert('please select a record to delete')
    this.toaster.error("please select record to delete")

  }
}
}
