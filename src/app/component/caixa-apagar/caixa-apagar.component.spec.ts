import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaApagarComponent } from './caixa-apagar.component';

describe('CaixaApagarComponent', () => {
  let component: CaixaApagarComponent;
  let fixture: ComponentFixture<CaixaApagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaApagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaApagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
