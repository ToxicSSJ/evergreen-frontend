import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-proyeccion',
  templateUrl: './proyeccion.component.html',
  styleUrls: ['./proyeccion.component.scss']
})
export class ProyeccionComponent implements OnInit {

  form2: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.form2 = this.formBuilder.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  guardar(){

  }

}
