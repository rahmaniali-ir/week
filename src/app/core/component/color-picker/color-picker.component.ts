import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { standardColors } from './standard-colors';
import { Subscription, from, fromEvent } from 'rxjs';
import { Position } from '../../type/position';
import { getHueFromHSLColor } from '../../utils/color';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass'],
})
export class ColorPickerComponent implements OnDestroy {
  @Input()
  set value(value: string) {
    const hue = getHueFromHSLColor(value);
    const ratio = hue / 360;

    this.customColorIndicatorOffsetPercent = Math.round(ratio * 100);

    this._value = value;
  }

  @Output() valueChange = new EventEmitter<string>();

  _value = standardColors[0];
  standardColors = standardColors;

  showCustomColor = false;
  customColorIndicatorOffsetPercent = 0;
  mouseMoveEvent = fromEvent<MouseEvent>(window, 'mousemove');
  mouseMoveSubscription?: Subscription;
  mouseUpEvent = fromEvent<MouseEvent>(window, 'mouseup');
  mouseUpSubscription?: Subscription;
  customColorPageX = 0;
  customColorTarget?: HTMLDivElement;

  constructor() {}

  ngOnDestroy(): void {
    this.mouseMoveSubscription?.unsubscribe();
    this.mouseUpSubscription?.unsubscribe();
  }

  get isSelected() {
    return !!this._value;
  }

  get isCustomColor() {
    if (!this.isSelected) return false;

    return standardColors.every((color) => color !== this._value);
  }

  updateValue(color: string) {
    this._value = color;
    this.valueChange.emit(color);
  }

  selectStandardColor(color: string) {
    this.updateValue(color);
    this.showCustomColor = false;
  }

  toggleCustomColor() {
    this.showCustomColor = !this.showCustomColor;
  }

  onStartCustomColorSelect({ target }: MouseEvent) {
    this.customColorTarget = target as HTMLDivElement;

    this.mouseMoveSubscription = this.mouseMoveEvent.subscribe((event) => {
      this.customColorPageX = event.pageX;
      this.selectCustomColor();
    });

    this.mouseUpSubscription = this.mouseUpEvent.subscribe(() => {
      this.mouseMoveSubscription?.unsubscribe();
      this.mouseUpSubscription?.unsubscribe();
    });
  }

  onCustomColorClick(event: MouseEvent) {
    this.customColorTarget = event.target as HTMLDivElement;
    this.customColorPageX = event.pageX;

    this.selectCustomColor();
  }

  selectCustomColor() {
    if (!this.customColorTarget) return;

    const { clientWidth } = this.customColorTarget;
    const { left } = this.customColorTarget.getBoundingClientRect();
    const offset = Math.max(
      0,
      Math.min(this.customColorPageX - left, clientWidth)
    );

    const ratio = offset / clientWidth;

    this.customColorIndicatorOffsetPercent = ratio * 100;

    const hue = Math.round(ratio * 360);
    this.updateValue(`hsl(${hue}deg 100% 50%)`);
  }
}
