import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSuppliesComponent } from './post-supplies.component';

describe('PostSuppliesComponent', () => {
  let component: PostSuppliesComponent;
  let fixture: ComponentFixture<PostSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSuppliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
