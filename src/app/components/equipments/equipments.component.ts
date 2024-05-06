import { Component } from '@angular/core';
import { EquipmentsService } from '../../core/services/equipments.service';
import { ConvertImageService } from '../../shared/utils/convert-image.service';

@Component({
  selector: 'app-equipments',
  standalone: true,
  imports: [],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.scss',
})
export class EquipmentsComponent {
  constructor(
    protected readonly equipmentService: EquipmentsService,
    protected readonly convertImageService: ConvertImageService,
  ) {}
}
