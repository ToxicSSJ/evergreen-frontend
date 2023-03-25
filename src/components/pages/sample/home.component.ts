import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EvergreenService} from "@services/evergreen.sertive";

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
    private _evergreenServie: EvergreenService
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
    const body = {
      "longitude": this.form.controls.longitud.value,
      "latitude": this.form.controls.latitud.value
    }
    console.log(body);
    this._evergreenServie.setPredio(body).subscribe(
      res => {
        console.log(res);
      },
      e => {
        console.log(e);
      }
    );
  }

  consultar():void {
      this._evergreenServie.getPredio().subscribe(
        res => {
          console.log(res);
          this.table = res[res.length -1];
        },
        e => {
          console.log(e)
        }
      );
  }
}
