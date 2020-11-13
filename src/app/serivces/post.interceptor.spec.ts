import { TestBed } from '@angular/core/testing';

import { PostInterceptor } from './post.interceptor';

describe('PostInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PostInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PostInterceptor = TestBed.inject(PostInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
