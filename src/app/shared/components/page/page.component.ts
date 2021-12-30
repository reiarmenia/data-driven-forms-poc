import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {Page} from '../../models/page';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() config!: Page;
  @Input() control!: FormGroup | AbstractControl | null;

  constructor() { }

  ngOnInit(): void {
    if (!this.config) {
      throw new TypeError('Page Component must be passed a Page Config.')
    }

    if (!this.control || !(this.control instanceof FormGroup)) {
      throw new TypeError('Page Component must be passed a Form Group.')
    }
  }

}
