import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importar esto
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module'; // Importar el módulo de cursos

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule, // necesario
    AppRoutingModule,
    CourseModule // se importa el módulo de cursos
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
