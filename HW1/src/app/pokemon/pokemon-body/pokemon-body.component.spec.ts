import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBodyComponent } from './pokemon-body.component';

describe('PokemonBodyComponent', () => {
  let component: PokemonBodyComponent;
  let fixture: ComponentFixture<PokemonBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
