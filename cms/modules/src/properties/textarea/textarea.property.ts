import { Component } from '@angular/core';
import { CmsProperty } from '@angular-cms/core';

@Component({
    selector: '[textareaProperty]',
    template: `
        <div class="form-group row" [formGroup]="formGroup">
            <label [attr.for]="id" class="col-sm-4 col-form-label">{{label}}</label>
            <div class="col-sm-8">
                <textarea class="form-control" rows="4" 
                    [id]="id" 
                    [name]="propertyName"
                    [formControlName]="propertyName"></textarea>
            </div>
        </div>
    `
})
export class TextareaProperty extends CmsProperty {
}