import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';

@NgModule({
  declarations: [ListCoursesComponent, DetalleCursoComponent],
  imports: [CommonModule],
  exports: [ListCoursesComponent]
})
export class CourseModule {}
