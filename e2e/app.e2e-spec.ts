import { Angular2ExpandableListPage } from './app.po';

describe('angular2-expandable-list App', () => {
  let page: Angular2ExpandableListPage;

  beforeEach(() => {
    page = new Angular2ExpandableListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
