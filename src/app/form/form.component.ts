import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  dsp:boolean=false;
  submits:string="Send Messege"
 hd:boolean=false;
  constructor( private http: HttpClient){
   // this.getData()
  }
  ngOnInit(): void {
    this.form
    this.submits="Send Messege"
  }
  form:FormGroup=new FormGroup({
    id:new FormControl(null),
    name:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z]*')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]),
    subject:new FormControl('',[Validators.required]),
    messege:new FormControl('',[Validators.required,Validators.maxLength(220)])
  })
  get getName(){
    return this.form.get('name')
  }
  
  get getEmail(){
    return this.form.get('email')
  }

  get getPhone(){
    return this.form.get('phone')
  }

  get getSubject(){
    return this.form.get('subject')
  }
  get getMessege(){
    return this.form.get('messege')
  }

  submit(fmdata:FormGroup){
    
   if(fmdata.valid){
    this.submits="Sending..."
    this.http.post("https://profilebalckend-production.up.railway.app/data/insert",fmdata.value).subscribe(
      (data)=>{
        alert("Submit Data Successfully")
        this.ngOnInit()
      },
      (error)=>{
        console.log(error)
        alert("Issue In Server")
        this.dsp=true
        
        this.ngOnInit()
      }
    )
   }
   else{
    this.hd=true
   }
  }
}
