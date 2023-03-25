import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  table: any;
  constructor(
    private readonly formBuilder: FormBuilder,
  ) {

    this.form = this.formBuilder.group({
        longitud: ['', Validators.required],
        latitud:  ['', Validators.required]
    });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
  }

  enviar():void{
    console.log(this.form.controls.longitud.value);
  }

  consultar():void {

  }
}
