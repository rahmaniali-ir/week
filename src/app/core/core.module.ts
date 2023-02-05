import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableButtonComponent } from './component/expandable-button/expandable-button.component';
import { IConComponent } from './component/i-con/i-con.component';
import { ColorPickerComponent } from './component/color-picker/color-picker.component';
import { ModalCardComponent } from './component/modal-card/modal-card.component';

@NgModule({
  declarations: [
    ExpandableButtonComponent,
    IConComponent,
    ColorPickerComponent,
    ModalCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    ExpandableButtonComponent,
    IConComponent,
    ColorPickerComponent,
    ModalCardComponent,
  ],
})
export class CoreModule {}
