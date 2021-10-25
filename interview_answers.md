# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

- context helps share values between components easily. it also consistantly re-renders on update

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- store reminds me of a database. In my company that is the source of truth for all our data. the store holds onto the data in state. reducers take in two pieces of data and reduce them into one. from what I've learned they take state and data, update state with that data and return state. actions are like managers, telling reducers what data to use and the the user does. for example when we need to add a new smurf, the action of adding a new smurf tells the reducer the data, and store gathers the info and stores it.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

- thunk allows you to make actions return a function instead of only an action. It expands what our actions can then do

4. What is your favorite state management system you've learned and this sprint? Please explain why!

- so far I've enjoyed redux. I like being able to map state and actions to the props in components, it really simplifies things in my opinion, and I don't have to micromanage state in a million different places. I can just import it through connect and map it and I'm done!
