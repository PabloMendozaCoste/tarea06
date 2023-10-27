import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CajaHerramientasPage } from './caja-herramientas.page';

describe('CajaHerramientasPage', () => {
  let component: CajaHerramientasPage;
  let fixture: ComponentFixture<CajaHerramientasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CajaHerramientasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
