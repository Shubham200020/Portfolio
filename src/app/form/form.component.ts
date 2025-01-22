import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  dsp:boolean=false
  data:any=[]
  constructor( private http: HttpClient){
    this.getData()
  }
  form:FormGroup=new FormGroup({
    id:new FormControl(null),
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    subject:new FormControl(''),
    contant:new FormControl('')
  })
  getData(){
    this.http.get("https://profilebalckend-production.up.railway.app/data").subscribe(
      (data)=>{
        this.data=data
        alert("Hello")
        //alert("Submit Data Successfully")

      },
      (error)=>{
        console.log(error)
       // this.dsp=true

      }
    )
  }
  
  submit(fmdata:FormGroup){
   if(fmdata.valid){
    this.http.post("https://profilebalckend-production.up.railway.app/data/insert",fmdata.value).subscribe(
      (data)=>{
        alert("Submit Data Successfully")

      },
      (error)=>{
        console.log(error)
        alert("issue")
        this.dsp=true

      }
    )
   }
  }
}
