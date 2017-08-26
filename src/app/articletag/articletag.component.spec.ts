import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticletagComponent } from './articletag.component';

describe('ArticletagComponent', () => {
  let component: ArticletagComponent;
  let fixture: ComponentFixture<ArticletagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticletagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticletagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
