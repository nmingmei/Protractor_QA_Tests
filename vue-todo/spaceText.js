describe('Todo app', function() {
   

  it('should add a new item', function() {
	browser.waitForAngularEnabled(false);


    browser.get('http://todomvc.com/examples/vue/');

    $('.new-todo').click();
    var text = '                  '; 

    $('.new-todo').sendKeys(text); 

    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    var todoItem = $$('.todo-list label').last();

    expect(todoItem.getText()).toContain('');

  });

});