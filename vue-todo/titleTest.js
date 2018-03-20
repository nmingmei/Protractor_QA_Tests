describe('todo app', function() {
  browser.ignoreSynchronization = true;

  it('should have a title', function() {
    browser.get('http://todomvc.com/examples/vue/');

    expect(browser.getTitle()).toEqual('Vue.js • TodoMVC');
  });
});