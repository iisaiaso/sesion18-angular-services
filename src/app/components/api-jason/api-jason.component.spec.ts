import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiJasonComponent } from './api-jason.component';

describe('ApiJasonComponent', () => {
  let component: ApiJasonComponent;
  let fixture: ComponentFixture<ApiJasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiJasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiJasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
