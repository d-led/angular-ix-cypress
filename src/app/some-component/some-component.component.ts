import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.css']
})
export class SomeComponentComponent {
@Input()
  someValue: number = -1;
}
