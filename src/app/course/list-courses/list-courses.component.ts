import { Component, OnInit } from '@angular/core';
import { CursoService } from '../course.service';
import { Curso } from '../course';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
  standalone: false // mantener en false si se usa un module tradicional
})
export class ListCoursesComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe({
      next: (data) => {
        this.cursos = data;
      },
      error: (err) => {
        console.error('Error al obtener cursos:', err);
      }
    });
  }

  getCursosConCertificado(): number[] {
    return this.cursos
      .filter(curso => curso.offers_certificate)
      .map(curso => curso.id);
  }
}

