import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoredPage } from './stored.page';

describe('StoredPage', () => {
  let component: StoredPage;
  let fixture: ComponentFixture<StoredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
