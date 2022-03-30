import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceformComponent } from './balanceform.component';

describe('BalanceformComponent', () => {
  let component: BalanceformComponent;
  let fixture: ComponentFixture<BalanceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
