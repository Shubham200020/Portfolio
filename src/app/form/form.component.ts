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
  constructor(private fb: FormBuilder, private http: HttpClient){
  }
  form:FormGroup=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    subject:new FormControl(''),
    contant:new FormControl('')
  })
  submit(fmdata:FormGroup){
    this.dsp=true
    const formData=fmdata.value;
    
    const data = [
      ['Name', 'Email', 'Phone','subject','Feedback'], // Header row
      [formData.name, formData.email, formData.phone,formData.subject,formData.contant] // Data row

    ];
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Generate a Blob object from the workbook
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([new Uint8Array(excelBuffer)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    // Create a download link and trigger the download
    // const link = document.createElement('a');
    // link.href = window.URL.createObjectURL(blob);
    // link.download = 'form_data.xlsx';
    // link.click();

   alert("Issue") 
  }
}
