import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.scss']
})
export class PrediccionComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
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

  }

}
