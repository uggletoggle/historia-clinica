import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MotivoConsultaComponent } from './components/cabecera-formulario/motivo-consulta/motivo-consulta.component';
import { SistemaNerviosoComponent } from './components/region-superior/sistema-nervioso/sistema-nervioso.component';
import { CabezaCuelloComponent } from './components/region-superior/cabeza-cuello/cabeza-cuello.component';
import { RespiratorioComponent } from './components/region-media/respiratorio/respiratorio.component';
import { CardiovascularComponent } from './components/region-media/cardiovascular/cardiovascular.component';
import { AbdomenComponent } from './components/abdomen/abdomen.component';
import { UrogenitalComponent } from './components/region-inferior/urogenital/urogenital.component';
import { ProcedimientosComponent } from './components/procedimientos/procedimientos.component';
import { TratamientosComponent } from './components/procedimientos/tratamientos/tratamientos.component';
import { DesenlaceComponent } from './components/procedimientos/desenlace/desenlace.component';
import { InstitucionComponent } from './components/procedimientos/institucion/institucion.component';
import { PresuntivoComponent } from './components/presuntivo/presuntivo.component';
import { EpicrisisComponent } from './components/pie-formulario/epicrisis/epicrisis.component'
import { GinecobstetricoComponent } from './components/region-inferior/ginecobstetrico/ginecobstetrico.component';

import { PieFormularioComponent } from './components/pie-formulario/pie-formulario.component';
import { RegionMediaComponent } from './components/region-media/region-media.component';
import { RegionSuperiorComponent } from './components/region-superior/region-superior.component';
import { RegionInferiorComponent } from './components/region-inferior/region-inferior.component';
import { CabeceraFormularioComponent } from './components/cabecera-formulario/cabecera-formulario.component';
import { PsiquiatricoComponent } from './components/region-superior/psiquiatrico/psiquiatrico.component';
import { TraumaComponent } from './components/cabecera-formulario/trauma/trauma.component';
import { ParametrosBasicosComponent } from './components/cabecera-formulario/parametros-basicos/parametros-basicos.component';
import { MotivoLlamadaComponent } from './components/cabecera-formulario/motivo-llamada/motivo-llamada.component';



@NgModule({
  declarations: [
    AppComponent,
    MotivoConsultaComponent,
    SistemaNerviosoComponent,
    CabezaCuelloComponent,
    RespiratorioComponent,
    CardiovascularComponent,
    AbdomenComponent,
    UrogenitalComponent,
    ProcedimientosComponent,
    TratamientosComponent,
    DesenlaceComponent,
    InstitucionComponent,
    PresuntivoComponent,
    EpicrisisComponent,
    PsiquiatricoComponent,
    SistemaNerviosoComponent,
    PieFormularioComponent,
    RegionMediaComponent,
    RegionSuperiorComponent,
    RegionInferiorComponent,
    CabeceraFormularioComponent,
    GinecobstetricoComponent,
    TraumaComponent,
    ParametrosBasicosComponent,
    MotivoLlamadaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
