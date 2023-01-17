import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyContainerComponent } from './technology-container.component';

describe('TechnologyContainerComponent', () => {
  let component: TechnologyContainerComponent;
  let fixture: ComponentFixture<TechnologyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
