import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

import { CoreCommonModule } from '@core/common.module'

import { ContentHeaderModule } from '@modules/content-header.module'

import { SampleComponent } from './sample.component'
import { HomeComponent } from './home.component';
import { ProyeccionComponent } from './proyeccion/proyeccion.component';
import { PrediccionComponent } from './prediccion/prediccion.component';

const routes = [
  {
    path: 'ganancia',
    component: SampleComponent
  },
  {
    path: 'predio',
    component: HomeComponent
  },
  {
    path: 'prediccion',
    component: PrediccionComponent
  },
  {
    path: 'proyeccion',
    component: ProyeccionComponent
  }
]

@NgModule({
  declarations: [SampleComponent, HomeComponent, ProyeccionComponent, PrediccionComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
