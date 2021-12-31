import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../../models/config-declaration/section';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() config!: Section;
  @Input() control?: FormGroup | AbstractControl | null;
  @Input() index!: number;

  constructor() {
  }

  ngOnInit(): void {

    if (!this.config) {
      throw new TypeError('List Item Component must be passed a Section Config.');
    }

    if (!this.control || !(this.control instanceof FormGroup)) {
      throw new TypeError('List Item Component must be passed a Form Group.');
    }

    if (this.index === null || this.index === undefined) {
      throw new TypeError('List Item Component must be passed an index.');
    }

  }

  public decodeItemName(): string {
    return this.config.repeat?.itemName ?
      this.config.repeat.itemName.replace('%i', (this.index + 1).toString(10)) :
      '';
  }
}
