import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-data',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css'
})
export class ShowDataComponent {

  url:string="https://profilebalckend-production.up.railway.app/data"
  data:any=[]
  constructor(private http:HttpClient){
  }
 
 

  ngOnInit(): void {
 this.getData()
  
  }

  getData(){
    this.http.get(this.url+"/data").subscribe(
      (data)=>{
        this.data=data;
      },
      (error)=>{

        console.log("error"+error)
      }
    )  
  }
 
  deleteData(data:any){
    if(confirm("Are You Sure Delete")){
    this.http.post(this.url+"/data/delete",data).subscribe(
      (data)=>{
       
        this.getData()
      },
      (error)=>{
        
       alert("error")
        this.getData()
      }
    )
  }
  else{
    alert("Not Delete")
  }

  }
}

