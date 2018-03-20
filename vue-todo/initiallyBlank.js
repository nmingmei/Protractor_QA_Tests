// Framework: Protractor (or a framework of your choice)

describe('Todo app', function() {

  it('should have a blank list when opening up', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://todomvc.com/examples/vue/');
    var todoItem = $$('.todo-list label').last();

    expect(todoItem.isPresent()).toBe(false);    

  });

});