import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.scss'
})
export class WorkersComponent {
  workerForm: FormGroup;
  workers = [
    {
      name: 'Miguel Rodríguez',
      active: true,
      kg: 1250,
      total: 1500000,
      image: 'assets/images/avatar.png'
    },
      {
      name: 'Miguel Rodríguez',
      active: true,
      kg: 1250,
      total: 1500000,
      image: 'assets/images/avatar.png'
    
    }, 
  
    {
      name: 'Pedro Pablo',
      active: true,
      kg: 980,
      total: 1176000,
      image: 'assets/images/avatar.png'
    },
    {
      name: 'Juan Camilo',
      active: true,
      kg: 1100,
      total: 1320000,
      image: 'assets/images/avatar.png'
    },
    {
      name: 'Carlos Andrés',
      active: true,
      kg: 870,
      total: 1044000,
      image: 'assets/images/avatar.png'
    },
     {
      name: 'Carlos Andrés',
      active: true,
      kg: 870,
      total: 1044000,
      image: 'assets/images/avatar.png'
    },
     {
      name: 'Carlos Andrés',
      active: true,
      kg: 870,
      total: 1044000,
      image: 'assets/images/avatar.png'
    }
  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.workerForm = this.fb.group({
      name: ['', Validators.required],
      document: [
        '',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      status: ['Activo', Validators.required]
    });

  }
  saveWorker(): void {

    if (this.workerForm.invalid) {
      this.workerForm.markAllAsTouched();
      return;
    }

    console.log(this.workerForm.value);

    // aquí llamas tu servicio

    this.workerForm.reset({
      status: 'Activo'
    });
  }


}

