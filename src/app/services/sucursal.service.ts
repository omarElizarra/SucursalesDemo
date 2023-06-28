import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppsettingsComponent } from '../settings/setting.component';
import { catchError, map, throwError } from 'rxjs';
import { EmpleadoI, SucursalI } from '../interfaces/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

constructor(
  private http:  HttpClient,
  private appsettings: AppsettingsComponent,
) { }

/**
 * findAllSucursal
 *  - buscar sucursal por id
 * @return sucursales[]
 * @param id
 * @autor OmarElizarra
 */
  findAllSucursales(){
    const DIR = this.appsettings.API_ENDPOINT + `Sucursal`
    return this.http.get<SucursalI[]>(DIR).pipe(
      map(data=>data),
      catchError( err =>{
        return throwError(()=> new Error(err))
      })
    )
  }

  /**
 * findEmpleadoById
 *  - buscar empleados por sucursal
 * @return empleados[]
 * @param id
 * @autor OmarElizarra
 */
  findEmpleadoById(id:number){
    const DIR = this.appsettings.API_ENDPOINT + `Empleados${id}`
    return this.http.get<EmpleadoI[]>(DIR).pipe(
      map(data=>data),
      catchError( err =>{
        return throwError(()=> new Error(err))
      })
    )
  }

}
