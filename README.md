# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Contributors: Jennifer Forsyth

### Check Your Understanding
1. I would not use a unit test to test the "message" feature of the messaging application. Although I would test how fast execution is when sending a message to another user and ensure the right message is being sent to the user, it is practically impossible unit testing with jest as it needs many components to interact with each other in order for the message to be sent to another user.

2. Yes, I would use the unit test to test the feature. The "max message length" feature is small scale (only uses a part of the application). Changing the max message lengthf eature won't affect other unit tests as it's is own separatefeature that is not dependent on other components. Also, it's easy to manipulate the cases (depending on how long the message length should be, 80 in this case), as it's able to change and execute quickly when tested.