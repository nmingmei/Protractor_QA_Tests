// Framework: Protractor (or a framework of your choice)

describe('Todo app', function() {

  it('should not add spaces as a new item', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://todomvc.com/examples/vue/');
    $('.new-todo').click();
    $('.new-todo').sendKeys('          ');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    var todoItem = $$('.todo-list label').last();
    expect(todoItem.isPresent()).toBe(false);    

  });

});