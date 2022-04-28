import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ObtenerPdfService {
  constructor(private http: HttpClient) {}

  baseUrl2: string = 'https://localhost:7176/api/Personas/get/';
  public obtenerB64() {

    return this.http.get(this.baseUrl2);
  }


  baseUrl3: string = 'https://localhost:7176/api/Personas/';
  public obtenerPersonas() {

    return this.http.get(this.baseUrl3);
  }
}
