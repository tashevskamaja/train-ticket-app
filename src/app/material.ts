import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatListModule } from '@angular/material/list'
import { MatCheckboxModule } from '@angular/material/checkbox'


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [MatNativeDateModule, 
        MatDatepickerModule, 
        MatIconModule, 
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        FormsModule, 
        MatCardModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatListModule, 
        MatRadioModule,],

    exports: [MatNativeDateModule, 
        FormsModule,
        MatDatepickerModule, 
        MatIconModule, 
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatCardModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatListModule, 
        MatRadioModule,],

})

export class MyMaterialModule { }