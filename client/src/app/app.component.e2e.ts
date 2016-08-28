describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular With Webpack';
    expect(subject).toEqual(result);
  });

  it('should have `your content here` x-large', () => {
    let subject = element(by.css('h1')).getText();
    let result  = 'Hello from Angular 2 App with Webpack';
    expect(subject).toEqual(result);
  });


});
