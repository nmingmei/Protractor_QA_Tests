// Framework: Protractor (or a framework of your choice)

describe('Todo app', function() {

  it('should add a new item', function() {
    browser.waitForAngularEnabled(false);

    browser.get('http://todomvc.com/examples/vue/');

    $('.new-todo').click();
    $('.new-todo').sendKeys('test item');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    var todoItem = $$('.todo-list label').last();
    expect(todoItem.getText()).toContain('test item');
  });

  it('should remove item', function() {

    var todoItem = $$('.todo-list label').last();
    browser.actions().mouseMove($('.view')).perform();
    var deleteButton = $('.destroy');

    // after hovering with mouse, wait a while for cross to appear
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(deleteButton), 5000);  

    deleteButton.click();

    expect(todoItem.isPresent()).toBe(false);    

  });

});