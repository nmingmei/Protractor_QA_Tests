describe('Todo app', function() {
   

  it('should add a text with length over 1000 chars', function() {
	browser.waitForAngularEnabled(false);


    browser.get('http://todomvc.com/examples/vue/');

    $('.new-todo').click();
    var text = 'In a little time I began to speak to him, and teach him to speak to me; and, first, I let him know his name should be Friday, which was the day I saved his life; I called so for the memory of the time. I likewise taught him to say Master, and then let him know that was to be my name; I likewise taught him to say Yes and No, and to know the meaning of them. I gave him some milk in an earthen pot, and let him see me drink it before him, and sop my bread in it; and gave him a cake of bread to do the like, which he quickly complied with, and made signs that it was very good for him. I kept there with him all that night; but, as soon as it was day, I beckoned to him to come with me, and let him know I would give him some clothes; at which he seemed very glad, for he was stark naked. As went by the place where he had buried the two men, he pointed exactly to the place, and showed me the marks he had made to find them again, making signs to me that we should dig them up again and eat them. At this I appeared very angry, expressed my abhorrence of it, made as if I would vomit at the very thoughts of it, and beckoned with my hand to him to come away, which he did immediately, with great submission.'

    $('.new-todo').sendKeys(text); 

    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    var todoItem = $$('.todo-list label').last();

    expect(todoItem.getText()).toContain(text);

  });

});