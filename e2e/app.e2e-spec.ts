import { SearchOnApiPage } from './app.po';

describe('search-on-api App', function() {
  let page: SearchOnApiPage;

  beforeEach(() => {
    page = new SearchOnApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
