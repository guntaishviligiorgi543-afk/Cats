import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Allcats } from './allcats';

describe('Allcats', () => {
  let component: Allcats;
  let fixture: ComponentFixture<Allcats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allcats],
    }).compileComponents();

    fixture = TestBed.createComponent(Allcats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
