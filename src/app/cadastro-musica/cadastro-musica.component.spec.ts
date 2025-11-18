import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMusicaComponent } from './cadastro-musica.component';

describe('CadastroMusicaComponent', () => {
  let component: CadastroMusicaComponent;
  let fixture: ComponentFixture<CadastroMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroMusicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});