# Spacecraft-Builder
Springboard SEC React Form Exercise
This is an exercise for the Springboard SEC bootcamp.  The React exercises are becoming more complex and it is allowing me to develop my own personal process for creating apps.  I have found that I like to plan the architecture of the exercise before jumping into any code.  

First, I identify component files needed, what the folder structure should be, which components need to be linked together, determine where state will live, determine components needing logic vs ones that are just for display.  
Then I make any upfront decisions needed such as what should the "shape" of any objects be? (decide on what properties are needed), should the item name be free text or come from a dropbox?, should quantity be text or a number.  Spoiler alert: it's a number to the user, but it's a string in the background.  I also learned that the native HTML will give the quantity stepper picker.  That was a happy surpirse.

After thinking about architecture, I like to create the scaffolding for all the component files.  I create a Components folder in src folder provided by React/Vite. I write placeholders in each one and get any linking done.  Placeholders are just generic functions with the top line: export default function ComponentName () return ( <h1>ComponentName</h1> );}  This allows you to visually check that you're up and ready to code.  I also like making the h1 for parent component, h2 for next level child, h3 for bottom level child.  The smaller the heading, the dumber the component, maybe?  It's a nice visual aide to have.

This is the first exercise where state had to live in 2 different components, which made the component tree more layers deep than previous assignments.  I also played with some CSS in this assignment.  I know we're supposed to have red error highlights, but I went off script and did my own thing.  I did learn something though by doing that, you have to disable the browser's native error boxes so you can insert your style.

Overall, a challenging exercise.  I think all bootcamp exercises are difficult.  It's a challenging learning environment to begin with, but it gives you a pathway to learn coding and forces you to reach for resouces to learn the subject matter.  How many extracurricular books, tutoring sessions, or other resources did you have to reach for when you were in school? 
