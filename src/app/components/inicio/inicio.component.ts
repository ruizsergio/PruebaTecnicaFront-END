import { Component, OnInit } from '@angular/core';
import { Crud } from 'src/app/models/crud';
import { CrudService } from 'src/app/service/crud.service';
import Swal from 'sweetalert2'
import *as bootstrap from "bootstrap"

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[CrudService]

})
export class InicioComponent implements OnInit {
   Registro:any 
  public Registros:Crud;
  RegistrosUpdate:any
  id:number

  constructor(
    private _crud :CrudService
  ) {
    this.Registro={
      description:"",
      monto:""
    };
    this.RegistrosUpdate={
      NU_ID:null
    }
   }

  ngOnInit(): void {
    this.getpost()
   
    
   
  }
  onSubmit(){
   
    this._crud.postResquest(this.Registro).subscribe(
      res=>{
       
         console.log(res)
         this.getpost()
      }
    )
    Swal.fire({
 
      icon: 'success',
      title: 'Elemento Creado',
      showConfirmButton: false,
      timer: 1500
    })
    
  }

  getpost(){
    this._crud.getResquest().subscribe(
      res=>{
        console.log(res.response.data)
        this.Registros=res.response.data
        
      }
    )
  }
  modal(update){
   this.id= update
   
    this._crud.getIdResquest(update).subscribe(
      res=>{
       
      
      this.RegistrosUpdate= res.data[0]
      console.log(this.RegistrosUpdate)
         
         
         
      }
    )
    
  }
  postUpdate(id){
    
  console.log(id)
  this._crud.putResquest(id,this.Registro).subscribe(
    res=>{
     
       console.log(res)
       
    }
  )
 
  Swal.fire({
 
    icon: 'success',
    title: 'Elemento actualizado',
    showConfirmButton: false,
    timer: 1500
  })
  var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
  myModal.hide()
  this.getpost()
  }

  deleteResquest(_id){
    console.log(_id)
    
    
     this._crud.deleteResquest(_id).subscribe(
       res=>{
        
          console.log(res)
       }
     )
     Swal.fire({
 
      icon: 'success',
      title: 'Elemento eliminado',
      showConfirmButton: false,
      timer: 1500
    })

    this.getpost()
  }
}
