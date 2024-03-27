Start
|
v
Display Login Screen
|
v
User enters username and password
|
v
Login successful?
|
|------No-------> Display Error Message
|                   |
|                   v
|                Display Login Screen
|                   |
|                   v
|                User enters username and password
|                   |
|                   v
|                (Loop)
|
|------Yes------> Display Quiz Page
|                   |
|                   v
|                Display Question 1
|                   |
|                   v
|                User selects an answer
|                   |
|                   v
|                Is the answer correct?
|                |
|                |------Yes------> Increment Score
|                |
|                |------No-------> Do Nothing
|                   |
|                   v
|                Display Question 2
|                   |
|                   v
|                Repeat for remaining questions
|                   |
|                   v
|                End of Quiz
|                   |
|                   v
|                Display Quiz Results
|                   |
|                   v
|                End