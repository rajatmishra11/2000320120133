## Learn React-

---

### What is React.js?

1.  it is JS library created by Facebook to create user interface.
2.  React is used make a single page application.
3.  React allowed us to create reusable UI components.

---

### What is Single Page Application?

    SPA is an application that loads only a single document, and then updates the body content of the single document via JavaScript API's.

### Benifits-

    It allows users to use websites without loading whole new pages, which results in performance gains and a more dynamic experience.

---

### What is Component in React?

1.  Components are independent and reusable bits of code.
2.  They serve the same purpose as JS functions, but work in isolation and return HTML.
3.  Components come in two type, Class components and Function componnets.

---

### Folder Structures in React?

1.  #### package.json - dependencies + scripts.
2.  #### node_modules - all dependencies are installed in node modules folder.
3.  #### public -

    - index.html file where our app will be rendered.
      This file should contain div with id root(by default).

4.  #### src-

    - ##### index.js
      - Entry point for our react application.
      - Here we import App from './App'
      - <APP> is component, render the data of APP component where id is root means in (index.html) file.
    - ##### App.css
      - containing CSS of the app.
    - ##### App.js
      - Contains class component which extends from React.Component
      - It contains render method which returns jsx(HTML).
    - ##### App.test.js
      - Contains test cases for App component.

5.  Other folders can be added

---

### What is JSX?

1.  Stands for JavaScript XML or Extension.
2.  with the help of JSX we xan write and add HTML in React.
3.  JSX converts HTML tags into React element.
4.  Its not compulsory to use JSX.

---

### Rules for Writing JSX-

1.  HTML code must wrap into one top level element -(Parent).
2.  Each HTML tag must be closed properly
3.  Attribute class = className
4.  No if-else condition jsx but ternary opearator can be used.
5.  JS expression in JSX must be wrapped in {}
6.  Note: In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
    In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.

---

**Babel is JS compiler, which convert JSX into Pure JS.**

---

### React Fragments-

1.  used when you want to return multiple children from a component without adding extra nodes to the DOM.
2.  A container to group without adding extra nodes in DOM.
    Example:

```
        const ListItem = ({item}) => {
        return (
        <div>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        </div>,
        <hr/>
        );}
```

Instead of returning multiple elements like above, we can wrap them inside React Fragment.

```
Return (<>...</>) instead of (<div><h2>..</h2><hr/></div>)
```

---

### What is Props?

1.  stands for Properties.
2.  Props are used to transfer/communicate data from one element/component to another.
3.  Props are just like a function->Parameters in JavaScript.
4.  Props are just passed as Object containing all methods and variables and nested objects.
5.  Props are read-only snapshots in time: every render receives a new version of props.
6.  You can’t change props. When you need interactivity, you’ll need to set state.
7.  Note: The children prop in React is a special prop that allows you to pass elements or components
    between the opening and closing tags of a custom component. It enables you to nest content within a component, making it reusable and flexible.

### Rendering of List in React -

1. use map just like in JS `{IPL.map((team)=> <h1> {team} </h1> )} , where IPL is array.`
2. Warning: Each child in a list should have a**unique "key" prop**.
   - Why- instead to changing only one(that is added), it update(render) all elements in the list.
   - **Solution- use Keys**-
   - JSX elements directly inside a map() call always need keys!
   - Keys help React identify which items have changed, are added or removed. Keys should be given to the elements
   - inside the array to give the elements a stable identify.
   - Keys must be unique among siblings.
   - Keys must not change or that defeats their purpose! Don’t generate them while rendering.
   - index can be used as a key.

---

### Purity(same i/p==> same o/p) and Bug Avoidance in React:

1.  Use pure functions for predictability and reduced bugs.
2.  Keep render methods pure; handle state and side effects with hooks.
3.  Optimize with memoization techniques (React.memo, useMemo, useCallback).
4.  Enable <React.StrictMode> to detect side effects and deprecated APIs, improving code quality.

---

### Your UI is a Tree:

- Trees are commonly used to represent relationships between entities, such as in UI modeling.

1.  **Render Trees**:

    - These represent the nested relationships between React components in a single render.
    - They change with conditional rendering and different prop values.
    - Render trees help identify top-level components, which impact the rendering performance of all their descendants, and leaf components, which are frequently re-rendered.
    - This is useful for debugging and optimizing rendering performance.

2.  **Dependency Trees**:
    - These represent module dependencies in a React app.
    - Build tools use dependency trees to bundle the necessary code for shipping an app.
    - They are crucial for debugging large bundle sizes, which affect load times, and for optimizing bundled code.

---

## Adding Interactivity

1. React lets you add event handlers to your JSX.
2. Handle events in React by passing a function as a prop to an element, like `<button onClick={handleClick}>`.
3. Event handlers must be passed, not called (`onClick={handleClick}`, not `onClick={handleClick()}`).
4. Handlers can be defined separately or inline within a component, allowing access to props.
5. Declare a handler in a parent component and pass it to a child as a prop. Custom event handler props with specific names can also be defined.
6. To stop event propagation, call `e.stopPropagation()`. To prevent default browser behavior, call `e.preventDefault()`.
7. Explicitly call a parent handler from a child to avoid propagation.

---

### State(Snapshot of App or A Component's Memory)->

1.  data that changes over time is called state.
2.  The state is a built in react Object that is used to contain data or information about the component
3.  A State can be modified based on user action or network changes.
4.  Every Time when the state of an object changes, React re-render the component to the browser.
5.  State is private to the component. If you render it in two places, each copy gets its own state.

---

### How to change value?

1.  By using Class Component Life-cycle method
2.  Function Component using Hooks

---

### Why Hooks?

1.  Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
2.  Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.
3.  To update a component with new data, two things need to happen:
    - Retain the data between renders.
    - Trigger React to render the component with new data (re-rendering).

---

### What is Hook?

1.  Hooks are special functions that are only available while React is rendering.
2.  add features to function Components.

---

### Rules of Hooks-

1.  Must be written inside a function component.
2.  must be import in component.
3.  must be call at top level of component.
4.  cannot be conditional.

---

### Types of Hooks-

1.  Manage State within React Component:
    - useState()
    - useReducer()
2.  use Data passed through Context:
    - useContext()
3.  you "reference things" like HTML:
    - useRef()
4.  To connect External Systems(API's):
    - useEffect()
5.  Performance Hooks(prevent Unnecesary work)
    - useMemo()
    - useCallback()

### useState Hook-

1.  The React useState Hook allows us to track state in a function component.
2.  State generally refers to data or properties that need to be tracking in an application
3.  A state variable to retain the data between renders.
4.  A state setter function to update the variable and trigger React to render the component again.

```
useState accepts an initial state and returns two values:
    a.  The current state.
    b.  A function that updates the state.
Eg.   const [count, setCount] = useState(0);
```

---

### "Understanding React's Rendering Process: From Trigger to DOM Commit":

1. **Trigger a Render**:

   - Initial render when the app starts.
   - Re-renders when a component's state or its ancestor's state updates.

2. **Render the Component**:

   - React calls the necessary components to determine the updated UI.
   - It recursively renders nested components until the UI tree is fully defined.

3. **Reconiliation- Commit to the DOM**:

   - For the initial render, React creates and appends DOM nodes.
   - For re-renders, React applies minimal changes to the DOM to match the new UI.

4. **Efficiency**:

   - React only updates the DOM nodes if there are differences between renders.

5. **Strict Mode**:
   - Helps identify rendering mistakes by calling each component's function twice during development.

---

### "How State and Event Handlers Work Across Renders in React":

1. Setting state requests a new render.
2. React stores state outside of your component.
3. useState provides a snapshot of the state for that render.
4. Variables and event handlers don’t persist across re-renders.
5. Each render has its own event handlers.
6. Every render (and its functions) sees the state snapshot from that render.
7. Think of state in event handlers as you do about rendered JSX.
8. Event handlers retain the state values from the render when they were created.

---

### "Understanding Static Variables and Immutable State Management in React":

1. **Static Local Variables**: Retain value between function calls and have function scope.
2. **Static Member Variables**: Shared among all class instances, with class scope.
3. **Static Member Functions**: Belong to the class, not instances, and can only access static members.
4. **Static Global Variables**: Have file scope, limited to the file where they are declared.
5. **Static Functions**: Limited to the file where they are declared, providing internal linkage.
6. **Immutable State in React**: Mutating state objects won't trigger renders; create new objects instead.
7. **Object Spread Syntax**: Use `{...obj, something: 'newValue'}` to create copies; it's shallow, so nested updates require copying all levels.
8. **Use Immer**: To reduce repetitive copying code when updating nested objects.

---

### Preserving and Resetting State

1.  State Persistence by Component Position:
    - React maintains the state of a component as long as it remains in the same position in the component tree. If the component stays in the same place during re-renders, its state will persist.
2.  State is Associated with Tree Position, Not JSX Tags:
    - State is tied to the specific position in the virtual DOM tree where the component is rendered, rather than the specific JSX tag or the component instance itself. If the component's position in the tree changes, React treats it as a new component, which can reset its state.
3.  Forcing Subtree to Reset State with Different Key:
    - By giving a component a unique key prop, you can force React to reset the component’s state. Changing the key value makes React treat it as a different component, thus reinitializing its state.
4.  Avoid Nesting Component Definitions:
    - Defining components inside other components is generally discouraged because each re-render of the parent component will recreate the nested component. This can lead to unintended state resets and performance issues, as the nested component is considered a new instance on each render.

---

### useEffect Hook-

1.  The React useEffect Hook allows us to run some code after the first render of a component.
2.  It’s called once, both on the initial render and every time the component re-renders.
3.  If you pass an empty array, it will render the entire component again for the very first time.
4.  When we pass dependency array into useEffect, then only those dependencies which have changed since last render will cause the effect to execute.
5.  If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
6.  Eg. used when Timer Functions, DOM manupulation , fetch data.
7.  `useEffect(<function>, <dependency>)`

---

### useRef-

1.  Directly - DOM Manupulation
2.  useRef returns a ref object with a single **current** property initially set to the initial value you provided.
3.  `const ref = useRef(initialValue)`
4.  usage:
    - For storing value from form input fields
    - Referencing a value with a ref
    - Manipulating the DOM with a ref
    - Avoiding recreating the ref contents

---

### Props Drilling:

1.  Prop drilling is basically a situation when the same data is being sent
    at almost every level due to requirements in the final level.
2.  **Why not to Use the PropsDrilling**-
    - Code Complexity increases.
    - Reduced Maintainability.
    - Performance Overhead.
    - Decreased Component Reuseability.
    - Increased Development Time.
3.  **Solution**
    - Solve prop drilling with UseContext Hooks.

---

### Context: An Alternate to passing props

1.  Context lets a component provide some information to the entire tree below it.
2.  Context passes through any components in the middle.
3.  Context lets you write components that “adapt to their surroundings”.
4.  Before you use context, try passing props or passing JSX as children.

---

### Context API / useState Hook-

1.  Creator: a new context in Parent Component `const MyContext = createContext(defaultValue);`
2.  Provider- wrap the Parent Components by ContextProvider
    `<MyContext.Provider value={{ fname, lname}}> <> </MyContext.Provider>`
3.  Consumer- access the data in any child component:  
     `<MyContext.Consumer> {({ fname, lname }) => ( <> <h1>{fname}</h1> <h1>{lname}</h1> </> )} </MyContext.Consumer>`
4.  **Problem**- Nesting(wrapping increase) leads to arise problem like Callback hell.
5.  **Solution** useContext Hook in Consumer Step

---

### useContext Hook-

1.  React Context is a way to manage state globally.
2.  It can be used together with the useState Hook to share state between
    deeply nested components more easily than with useState alone.
3.  usage:
    - create -same
    - provider -same
    - useContext - uses context from any parent or grandparent etc.
      `const {fname, lname}= useContext(MyContext);`

---

### Memoization-

1. an optimization technique for accelerating computer programs by caching the
   results of heavy function calls and returning them when similar inputs are encountered repeatedly.
2. React memoization is similar to caching.
3. Avoid unnecessary calls.

### useMemo-

1.  memoization as caching a value so that it does not need to be recalculated.
2.  React useMemo Hook returns a memoized value.
3.  useMemo Hook only runs when one of its dependencies update.

---

### What is usecallback?

1.  The useCallback and useMemo Hooks are used to optimize the re-rendering of components in React. They help us avoid unnecessary renders.
2.  The main difference between the two hooks, useCallback and useMemo, is that useCallback will always return a new memoized function if any of its dependencies change.
3.  The useMemo Hook will always return the same value if the dependencies array is the same.

---

#### Problem ->

1. on clicking add every time Child A is printed !!-> useMemo ko apply karien to?? ->wrap karo ->fir sirf 1 baar hi print hoga(render).
2. but agar childA me props pass karein -> phir wahi problem hogi -> useMemo ke baad bhi ->Re-Render Hoga, Why?
   REFERENTIAL EQAULITY-(functions are re-created when any re rendering occurs).

#### Solution-> useCallback

---

### How to use useCallback with example?

1.  `Syntax- const cachedFn = useCallback(fn, dependencies)`
2.  The useCallback Hook only runs when one of its dependencies update.

---

### React Form->

1.  Defaut behavior of HTML form is browsing to a new page on submit ->
    direct form didn't (edit the value of input field) because in react value is treated as props(read-only behavior).
    **Note: e.preventDefault() : used to prevent new page from being loaded.**

2.  Other one when -Manupalation of form data requires JS function there is a standard way to achieve this with a technique called "controlled Components".

3.  You can control the values of more than one input field by adding a name attribute to each element.
    We will initialize our state with an empty object.
    To access the fields in the event handler use the event.target.name and event.target.value syntax.
    To update the state, use square brackets [bracket notation] around the property name.

4.  #### Uncontrolled Components-
    When you don't provide a value prop for an <input> element, it becomes uncontrolled.
    To write a uncontrolled component, instead of writing a click handler, you can use the ref to get from the DOM.

---

### Lifting State-up or pass data from child to parent ->

1.  Make a function in Parent and pass it(using props) to child component.
2.  in child component call that function and pass the data(as Parameter) that has to be send to parent component.

---

### useState hooks with objects-

---

### useState hooks with Arrays-

---

### useReducer Hook-

1.  similar to useState, allows to manage state.
2.  Use useState for simple state logic.
3.  Use useReducer for complex state logic and when state updates depend on the previous state or multiple actions.
4.  useReducer provides a more predictable and maintainable way to manage complex state logic in React functional components.

---

### To convert from useState to useReducer:

1.  Dispatch actions from event handlers.
2.  Write a reducer function that returns the next state for a given state and action.
3.  Replace useState with useReducer.

---

1.  Reducers require you to write a bit more code, but they help with debugging and testing.
2.  Reducers must be pure.
3.  Each action describes a single user interaction.
4.  Use Immer if you want to write reducers in a mutating style.

---

### How to Use useReducer?

1.  Define the Reducer Function:
    The reducer function takes the current state and an action, and returns the new state.

```
function reducer(state, action) {
    switch(action.type){
        cases..
    }
}


```

2.  Initial State: Define the initial state for your reducer.

```const initialState = {
  count: 0
};
```

3.  Call useReducer: Use the useReducer hook inside your component.
    `const [state, dispatch] = useReducer(reducer_fn , initialState)`
4.  The reducer function contains your custom state logic and the initialStatecan be a simple value
    but generally will contain an object, manage the state.
    reducer - takes current state and action and returns new state.
    `newState= reducer(currentState, action)`
5.  The useReducer Hook returns the current state and a dispatch method.

---

### custom Hooks-

1.  A custom Hook is a JS function whose name starts with "use"
2.  We can use other Hooks in custom hooks as well

### Why to use custom hooks?

1.  to remove the duplicated logic in components and we can extract that logic to custom hooks.
2.  Example: useFetch

---

### Axios in React-

1.  In React, backend communication is typically achieved using the HTTP protocol.
    While many developers are familiar with the XML HTTP request interface and Fetch API for making HTTP requests,
    there’s another powerful library called Axios that simplifies the process further.
2.  Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints.
3.  This library is very useful to perform CRUD operations.
4.  This popular library is used to communicate with the backend.
5.  Axios supports the Promise API, native to JS ES6.
6.  Using Axios we make API requests in our application. Once the request is made we get the data in Return, and then we use this data in our project.
7.  It also provides support for async/await syntax introduced in ES8.
8.  Axios has methods like get(), post() etc., which are chainable.
9.  Axios is lightweight (~9kB gzipped), makes it easy to add to your project.
10. Axios does not have any dependencies.

---

### How to install axios?

`npm i axios`

### How to Use?

```
import axios from 'axios';
const fetchData = ()=>{
        // async function
        return await axios.get('https://api.example.com/data')
                        .then(response => response.data);
    }
```

Use this data in componentDidMount or useEffect

- Note:- In class based components you have to bind the functions. But in functional components it's not needed.

---

### Destructuring in React:

---

### Conditional Rendering in React.js:

- if/else
- Element Variables
- Ternary Operator
- Short Circuit Operator

---

### React CSS Styling-

1.  Inline CSS

    - To style an element with the **inline style** attribute, the value must be a JavaScript object.
      `<h1 style={{color: "red"}}>Hello Style!</h1>`
    - {{}}
    - Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with **camel case** syntax,
    - eg. `Use backgroundColor instead of background-color`

2.  External Style Sheet-
    - You can write your CSS styling in a separate file, just save the file with the .css file extension,
      and import it in your application.
3.  CSS Module

---

### React Router V6-

1.  React Router enables "client side routing".
2.  React router is fully featured client and server side routing JS library for building user interface.
3.  Client side routing allows your app to update the URL from a link click without making another request for another document from the server. It provides API's which are easy to understand
4.  Usage-
    - Installation : `npm install react-router-dom`
    - import BrowserRouter in index.js file
    - wrap your application(<App/>) in index.js

```
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
```

---

### React Router Component-

1.  **BrowserRouter**
    - BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState, and popState events) to keep you UI in sync with the URL.
    - It is a parent component that is used to store all of the other components.
2.  **Routes**

    - It’s a new component introduced in the v6 and an upgrade of the component. The main advantages of Routes over Switch are:
    - Relative s and s
    - Routes are chosen based on the best match instead of being traversed in order.

3.  **Route**:
    - Route is the conditionally shown component that renders some UI when its path matches the current URL.
4.  **Link**:
    - The link component is used to create links to different routes and implement navigation around the application.
    - It works like an HTML anchor tag.

```
<Routes>
    <Route path="/" element={ <div> I'm Home Page </div>}>
    <Route path="/contact" element={<Contact/>}
    <Link to="/about">About</Link>
</Routes>
```

---

### useNavigate Hook-

1. The useNavigate hook returns a function that lets you navigate
2. The useNavigate hook can be used with or without parameters.
3. The useNavigate hook does not cause a render, it just changes the URL in the address bar.
   Example usage:

```
  const navigate= useNavigate();
  function gotoAbout() {
    navigate('/about');
  }
  return (
    <button onClick={gotoAbout}>Contact Us</button>
  )
```

4. Passing Data with useNavigate Hook in React.js-
   - Refer to Home.js and About.js for more information

---

### React- Redux:

1.  Redux is a predictable state container for JS applications.
2.  Redux is a library for JS Application.
3.  You can use Redux together with React, or with any other view library (Angular, Vue, Vanilla).
4.  Redux is a State Container, which means that it holds your application’s state.
    - Registration Form

---

### Core Concept of Redux:

1.  **Store**- Holds state of your Application.
2.  **Action** - Describe the changes in the state of your application.
3.  **Reducer** - Actually carries out the state transition dependending on the action.

```
Shop <-------------> Shopkeeper <----------------> Customer
(Store)              (Reducer)                    (action)
```

---

### Rules of Redux:

1.  The State of your Application is stored in an object tree within a single store.

```
{
    NumberOfBooks:10
}
```

2.  only way to change the state is to emit an action,
    an object decribing what happend.

```
{Type: "buyBook"}
```

3. to specify how the state tree is transformed by actions, we write pure reducer.

---

### Installation-

```
npm install react-redux
```

---

### Action in Redux-

1.  Actions are JS object that contains information.
2.  Actions are the only source of information for the Redux Store. It only tells us what has happened.
3.  Actions have a type property and it should be defined in string constraint.
4.  It's compulsory to include the **type property** in the object

```
Syntax:
const Actions   =   {
    type: 'buyBook'
}
```

---

### Reducer in React-

1.  Reducers decides how the state of application changes depending upon the sent to the store.
2.  Reducers are the function that accepts state and action as parameters and returns the next state of the application.

```
(previousState, action) => newState
```

---

### React Store:

1.  Entire Application contains Single Store.
2.  It is responsible for holding application state.
3.  getState() method gives access to state it holds.
4.  dispatch(action) method allow state to be updated.
5.  It has subscribe(listener) method as well by which we can register listeners.
6.  The listener function will be called every time when the state gets changed.
7.  Provider Component is used to make the store available to all other components in the app.
8.  We need to wrap our whole App inside <Provider> tag.
9.  connect() is higher order component which helps to connect any component with the store.

---

### React Redux + Hooks:

1.  React redux offers a set of hooks to- subscribe to redux store and dispatch actions.
2.  **useSelector** Hook-
    - use selector is a hook react-redux library provides to get hold of any state that is maintained in the store
    - Selector function is passed into useSelector and returns Returns selector function result.
    - Selector function accepts the redux state as its argument and returns a value.
    ```
    const xyz= useSelector(selector: Function, equalityFn ?: Function)
    ```
3.  **useDispatch** Hook-
    - This hook returns a reference to the dispatch function from the Redux store.
    - You may use it as to dispatch actions as needed.
    ```
    Syntax-
    const dispatch = useDispatch()
    ```

---

### What is middleware in Redux?

- Middleware is a higher-order function that intercepts actions before they reach the reducers.
- Middleware functions are where you handle cross cutting concerns
- Middleware is a way to intercept actions before they reach the Redux store. Middleware functions are executed synchronously from top to bottom.
- Middleware is a higher order function that intercepts actions before they reach the reducers.
