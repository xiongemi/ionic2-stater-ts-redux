import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CounterRecord } from '../../store';

@Component({
  selector: 'counter',
  template: `
    <button ion-button (click)="decrement.emit()">
      -
    </button>

    {{ counter ? counter.counter : 0 }}

    <button ion-button (click)="increment.emit()">
      +
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
  @Input() counter: CounterRecord;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
};
