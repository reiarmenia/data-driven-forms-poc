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
import { QuestionGroupComponent } from './components/question-group/question-group.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    QuestionComponent,
    SectionComponent,
    PageComponent,
    QuestionGroupComponent,
    ListItemComponent
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
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
  exports: [
    QuestionComponent,
    SectionComponent,
    PageComponent
  ]
})
export class SharedModule {
}
