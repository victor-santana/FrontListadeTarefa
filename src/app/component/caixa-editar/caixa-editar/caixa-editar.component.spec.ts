import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaixaEditarComponent } from './caixa-editar.component';


describe('CaixaEditarComponent', () => {
  let component: CaixaEditarComponent;
  let fixture: ComponentFixture<CaixaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
