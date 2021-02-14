import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bmip1Page } from './bmip1.page';

describe('Bmip1Page', () => {
  let component: Bmip1Page;
  let fixture: ComponentFixture<Bmip1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bmip1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bmip1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
