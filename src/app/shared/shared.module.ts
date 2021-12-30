import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {QuestionComponent} from './components/question/question.component';
import { SectionComponent } from './components/section/section.component';
import { PageComponent } from './components/page/page.component';


@NgModule({
  declarations: [
    QuestionComponent,
    SectionComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  exports: [
    QuestionComponent,
    SectionComponent,
    PageComponent
  ]
})
export class SharedModule {
}
