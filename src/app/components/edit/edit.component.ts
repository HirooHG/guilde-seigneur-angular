import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { EditType } from '../../shared/types/edit.type';
import { FormItemComponent } from './form-item/form-item.component';
import { FormType } from '../../shared/types/form.type';
import { FormState } from '../../core/states/form.state';

type MapEditTypeMapFormType = Record<string, FormType[]>;

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatTabsModule, FormItemComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  constructor(private formState: FormState) {}
  tabs: EditType[] = [
    EditType.Caste,
    EditType.Artifact,
    EditType.Equipment,
    EditType.Building,
    EditType.Animal,
    EditType.Character,
  ];

  private editTypeMapFormType: MapEditTypeMapFormType = {
    Caste: [FormType.Guild],
    Artifact: [FormType.Caste, FormType.Image],
    Equipment: [FormType.Caste, FormType.Image],
    Building: [
      FormType.Caste,
      FormType.Guild,
      FormType.Image,
      FormType.Rate,
      FormType.Strength,
    ],
    Animal: [
      FormType.Caste,
      FormType.Guild,
      FormType.Castle,
      FormType.Image,
      FormType.Rate,
      FormType.Strength,
    ],
    Character: [
      FormType.Rate,
      FormType.Strength,
      FormType.Caste,
      FormType.Guild,
      FormType.Castle,
      FormType.Kind,
      FormType.Equipment,
      FormType.Artifact,
      FormType.Image,
    ],
  };

  getFormTypes(editType: EditType): FormType[] {
    return this.editTypeMapFormType[editType];
  }

  resetForm() {
    this.formState.resetState();
  }
}
