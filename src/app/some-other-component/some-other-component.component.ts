import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-some-other-component',
  templateUrl: './some-other-component.component.html',
  styleUrls: ['./some-other-component.component.css']
})
export class SomeOtherComponentComponent {
  @Input()
  value: number = 0;
}
