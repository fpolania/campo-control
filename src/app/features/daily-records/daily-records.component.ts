import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import Swal from 'sweetalert2';
interface WorkerRecord {
  id: string;
  name: string;
  photo: string;
  weights: number[];
}

@Component({
  selector: 'app-daily-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-records.component.html',
  styleUrls: ['./daily-records.component.scss'],
})
export class DailyRecordsComponent {
  selectedDate = new Date();

  workers: WorkerRecord[] = [
    {
      id: '1',
      name: 'Miguel Rodríguez',
      photo: 'https://i.pravatar.cc/150?img=1',
      weights: [12, 20, 53],
    },
    {
      id: '2',
      name: 'Pedro Pablo',
      photo: 'https://i.pravatar.cc/150?img=2',
      weights: [30, 40],
    },
    {
      id: '3',
      name: 'Juan Camilo',
      photo: 'https://i.pravatar.cc/150?img=3',
      weights: [25, 35, 35],
    },
  ];

  getTotal(weights: number[]): number {
    return weights.reduce((a, b) => a + b, 0);
  }

  editWeight(worker: WorkerRecord, index: number) {
    Swal.fire({
      title: 'Editar pesada',

      text: worker.name,

      input: 'number',

      inputValue: worker.weights[index],

      inputLabel: 'Kilogramos',

      confirmButtonText: 'Actualizar',

      confirmButtonColor: '#22c55e',

      showCancelButton: true,

      cancelButtonText: 'Cancelar',

      showDenyButton: true,

      denyButtonText: 'Eliminar',

      denyButtonColor: '#dc3545',

      inputValidator: (value) => {
        if (!value) {
          return 'Debe ingresar un peso';
        }

        if (Number(value) <= 0) {
          return 'El peso debe ser mayor a 0';
        }

        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        worker.weights[index] = Number(result.value);

        Swal.fire({
          icon: 'success',
          title: 'Peso actualizado',
          timer: 1200,
          showConfirmButton: false,
        });
      }

      if (result.isDenied) {
        worker.weights.splice(index, 1);

        Swal.fire({
          icon: 'success',
          title: 'Peso eliminado',
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  }

  saveWorker(worker: WorkerRecord) {
    console.log('Guardar', worker);
  }

  addWeight(worker: WorkerRecord) {
    Swal.fire({
      title: `Nueva pesada`,
      text: worker.name,
      input: 'number',
      inputLabel: 'Kilogramos recolectados',
      inputPlaceholder: 'Ej: 25',
      confirmButtonText: 'Agregar',
      confirmButtonColor: '#22c55e',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',

      inputValidator: (value) => {
        if (!value) {
          return 'Debe ingresar un peso';
        }

        if (Number(value) <= 0) {
          return 'El peso debe ser mayor a 0';
        }

        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        worker.weights.push(Number(result.value));
      }
    });
  }
}
