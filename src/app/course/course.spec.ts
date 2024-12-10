import { Curso } from './course';

describe('Curso', () => {
  it('should create an instance', () => {
    const curso = new Curso(
      1,                     // id
      'Curso de Prueba',     // title
      'Plataforma X',        // platform
      2022,                  // launch_year
      true,                  // offers_certificate
      'Descripción de prueba', // description
      'http://imagenfake.com', // image
      40                     // duration_hours
    );
    expect(curso).toBeTruthy();
  });
});