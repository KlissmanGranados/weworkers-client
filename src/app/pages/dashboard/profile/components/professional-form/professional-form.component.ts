import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'professional-form',
  templateUrl: './professional-form.component.html',
  styleUrls: ['./professional-form.component.css']
})
export class ProfessionalFormComponent implements OnInit {
  ProfessionalForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.ProfessionalForm = this.formBuilder.group({
      tipoDesarrolladorId: [Validators.required],
      modalidadId: [Validators.required],
      tipoPagoId: [Validators.required],
      monedaId: [Validators.required],
      sueldo: [Validators.required],
      descripcion: [Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
