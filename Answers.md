1. What problem does the context API help solve?

    - With context API we don't have to pass props down from component to component (Prop drilling)

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - The store is where our global state is. It's an represented by a single immutable Javascript Object.
    - Actions are objects with a certain type and that can have some data called payload. Actions are dispached to the reducer
    - The reducer receives the action, checks its type and returns an updated copy of the current state depending on the type of the action.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    - Application state is global. All components have access to it.
    - At first component state is accessible only for that component. It can only sent to child components through using the prop drilling method/process

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    - redux-thunk is a middleware that allows us to have asyncronous calls in our action-creators methods and gives it access to the dispatch method. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    - REDUX!! It's confusing at first but when you understand you see that it helps to keep your application organized and it makes life much easier if you have larger applpications.
