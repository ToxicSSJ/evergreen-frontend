import { Component, OnInit } from '@angular/core'

import { locale as en } from './i18n/en'
import { locale as fr } from './i18n/fr'
import { locale as de } from './i18n/de'
import { locale as pt } from './i18n/pt'

import { CoreTranslationService } from '@core/services/translation.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  form: FormGroup;

  form2: FormGroup;

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(
    private readonly formBuilder: FormBuilder
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
  }

  enviar(){

  }

  guardar(){

  }
}
