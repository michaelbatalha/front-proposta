import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaDetailsComponent } from './proposta-details.component';

describe('PropostaDetailsComponent', () => {
  let component: PropostaDetailsComponent;
  let fixture: ComponentFixture<PropostaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
