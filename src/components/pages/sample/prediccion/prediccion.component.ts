import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EvergreenService} from "@services/evergreen.sertive";

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.scss']
})
export class PrediccionComponent implements OnInit {

  form: FormGroup;

  table: any;

  constructor(
    private readonly formBuilder: FormBuilder,
    private _evergreenServie: EvergreenService
  ) {

    this.form = this.formBuilder.group({
      longitud: ['', Validators.required],
      latitud:  ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  consultar(){

  }

  enviar(){
    const body = {
      "longitude": this.form.controls.longitud.value,
      "latitude": this.form.controls.latitud.value
    }
    this._evergreenServie.setPrediction(body).subscribe(
      res => {
        this.table = res;
      }
    );
  }

}
