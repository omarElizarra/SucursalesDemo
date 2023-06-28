import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmpleadoI, SucursalI } from 'src/app/interfaces/sucursal';
import { SucursalService } from 'src/app/services/sucursal.service';

let tableList: EmpleadoI[] = [
  {
    id:     1,
    nombre: "Test",
    edad:   32,
    sexo: 'Masculino',
    puesto: "cordinador",
    sucursal: "1",
  }
]


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  dataSource = tableList;
  displayedColumns: string[] = ['id', 'nombre', 'edad', 'sexo','puesto', 'opciones'];
  
  listaSucursales: SucursalI[] = [
    {
      id:1,
      sucursal: 'Centro Max'
    },
    {
      id:2,
      sucursal: 'Altacia'
    }
  ]
  sucursalesControl = new FormControl('');

  constructor(
    private serviceSucursales: SucursalService
  ){}

  ngOnInit() {
    this.getSucursales()
  }

  getSucursales(){
    return
    this.serviceSucursales.findAllSucursales().subscribe(data=>{
      this.listaSucursales = data
    })
  }

  searchEmpleados(_id:number){
    if(!!_id) return
    this.serviceSucursales.findEmpleadoById(_id).subscribe(data=>{
      tableList = data
    })
  }


  save() {
    // this.serviceDemoService.findWeather().pipe().subscribe( data => {
    //   console.log(data);

    // }

    // )
  }

  cancel(){

  }

  remover(element:EmpleadoI){
    console.log(element);
    // this.dataSource.remove(element);
  }

  edit(element:EmpleadoI){
    console.log(element);
  }
}
