import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCheckboxModule, MatIconModule, MatDialogModule, MatCardModule, MatListModule, MatProgressSpinnerModule, MatFormFieldModule, _MatCheckboxRequiredValidatorModule, MatStepperModule, MatInputModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatGridListModule, MatListModule, MatInputModule, MatStepperModule, MatCheckboxModule, MatFormFieldModule, MatProgressSpinnerModule, MatListModule, MatCardModule, MatButtonModule, MatToolbarModule, MatCheckboxModule, MatDialogModule, MatIconModule
  ],
  exports: [MatGridListModule, MatListModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatCheckboxModule, MatListModule, MatProgressSpinnerModule, MatCardModule, MatButtonModule, MatToolbarModule, MatCheckboxModule, MatDialogModule, MatIconModule]
})
export class MaterialModule { }
