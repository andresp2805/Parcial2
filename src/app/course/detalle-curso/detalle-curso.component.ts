import { Component, Input } from '@angular/core';
import { Curso } from '../course';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css'],
  standalone: false
})
export class DetalleCursoComponent {
  @Input() curso?: Curso;
}
