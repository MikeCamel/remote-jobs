import { RemoteJobsPage } from './app.po';

describe('remote-jobs App', () => {
  let page: RemoteJobsPage;

  beforeEach(() => {
    page = new RemoteJobsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
