import { Component, OnInit } from '@angular/core';
import { ObtenerPdfService } from '../../service/obtener-pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent implements OnInit {
  valor: any;
  personas: Array<any>;
  pdf: string = '';
  constructor(private obtenerPdfService: ObtenerPdfService) {
    this.obtenerPdfService.obtenerB64().subscribe((resp: any) => {
      this.valor = resp.valor;
    });

  }
  cambio() {
    if (this.valor != null) {
      /*   fetchGet("Persona/generarReporte", "text", function (data) {
        var a = document.createElement("a");
        a.href =
            "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," +
            data;
        a.click();
    });
    console.log("Termino"); */
      this.pdf =
        'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,' +
        this.valor;
      console.log(this.pdf);
      var a = document.createElement('a');
      a.href = this.pdf;
      a.click();
    }
  }
  mostrar() {
    if (this.personas != null) {


    } else {
      console.log('Esperando');
    }
  }

  ngOnInit(): void {
    this.obtenerPdfService.obtenerPersonas().subscribe((resp:any[any]) => {
      var longitud=
      this.personas = resp[0].nombre;
      this.personas = resp[1].nombre;
      console.log(resp);

    });
  }
}
