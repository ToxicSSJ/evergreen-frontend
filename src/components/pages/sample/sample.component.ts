import { Component, OnInit } from '@angular/core'

import { CoreTranslationService } from '@core/services/translation.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EvergreenService} from "@services/evergreen.sertive";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  form: FormGroup;

  form2: FormGroup;

  dataProyeccionAnterior: any;

  dataProyeccionRealizada: any;

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(
    private readonly formBuilder: FormBuilder,
    private _evergreenServie: EvergreenService
  ) {
    this.form = this.formBuilder.group({
      cultivo: ['', Validators.required],
      inversion: ['', Validators.required],
      toneladas: ['', Validators.required],
      ganancias: ['', Validators.required],
      fechaInversion: ['', Validators.required],
      fechaRecaudacion: ['', Validators.required]
    });

    this.form2 = this.formBuilder.group({
      nombre: ['', Validators.required]
    });
   }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.consultarProyecciones();
  }

  enviar(){

    const body = {
      "type": this.form.controls.cultivo.value,
      "investment": this.form.controls.inversion.value,
      "tons": this.form.controls.toneladas.value,
      "estimated": this.form.controls.ganancias.value,
      "startDate": this.form.controls.fechaInversion.value,
      "endDate": this.form.controls.fechaRecaudacion.value
    }
    console.log(body);
    this._evergreenServie.setGanancia(body).subscribe(
      res => {
        this.dataProyeccionRealizada = res;
      },
      e => {
        console.log(e);
      }
    );
  }

  guardar(){

    const body = {
      "name": this.form2.controls.nombre.value,
      "type": this.dataProyeccionRealizada.type,
      "investment": this.dataProyeccionRealizada.investment,
      "tons": this.dataProyeccionRealizada.tons,
      "estimated": this.dataProyeccionRealizada.estimated,
      "startDate": this.dataProyeccionRealizada.startDate,
      "endDate": this.dataProyeccionRealizada.endDate
    }

      this._evergreenServie.actualizarGanancia(body).subscribe(
        res => {
          console.log("Guardado", res);
        },
        e=> {
          console.log(e);
        }
      );
  }

  consultarProyecciones(){
    this._evergreenServie.getGanancia().subscribe(
      res => {
        this.dataProyeccionAnterior = res;
      },
      e => {console.log(e)}
    );
  }
}
