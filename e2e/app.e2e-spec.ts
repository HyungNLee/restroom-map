import { RestroomMapPage } from './app.po';

describe('restroom-map App', () => {
  let page: RestroomMapPage;

  beforeEach(() => {
    page = new RestroomMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
