## Learn React-
_______________________________________________________________________
### What is React.js?
1.  it  is JS library created by Facebook to create user interface.
2.  React is used make a single page application.
3.  React allowed us to create reusable UI components.

_______________________________________________________________________

### What is Single Page Application?
    SPA is an application that loads only a single document, and then updates the body content of the single document via JavaScript API's.
### Benifits-
    It allows users to use websites without loading whole new pages, which results in performance gains and a more dynamic experience.
________________________________________________________________________

### What is Component in React?
1.  Components are independent and reusable bits of code.
2.  They serve the same purpose as JS functions, but work in isolation and return HTML.
3.  Components come in two type, Class components and Function componnets.
_________________________________________________________________________

### Folder Structures in React?
1.  #### package.json - dependencies + scripts.
2.  #### node_modules - all dependencies are installed in node modules folder.
3.  #### public -
    -  index.html file where our app will be rendered.
        This file should contain div with id root(by  default).

4.  #### src-
    -  ##### index.js 
        -   Entry point for our react application.
        -   Here we import App from './App'
        -    <APP> is component, render the data of APP component  where id is root means in (index.html) file. 
    -   ##### App.css 
        - containing CSS of the app.
    -   ##### App.js   
        -   Contains class component which extends from React.Component
        -   It contains render method which returns jsx(HTML).
    -   ##### App.test.js 
        - Contains test cases for App component.

5.  Other folders can be added
_________________________________________________________________________

### What is JSX?
1.  Stands for JavaScript XML or Extension.
2.  with the help of JSX we xan write and add HTML in React.
3.  JSX converts HTML tags into React element.
4.  Its not compulsory to use JSX.
________________________________________________________________________

### Rules for Writing JSX-
1.  HTML code must wrap into one top level element -(Parent).
2.  Each HTML tag must be closed properly
3.  Attripbute class = className
4.  No if-else condition jsx but ternary opearator can be used.
5.  JS expression in JSX must be wrapped in {}
_______________________________________________________________________
**Babel is JS compiler, which convert JSX into Pure JS.**
________________________________________________________________________
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
_________________________________________________________________________
### What is Props?
1.  stands for Properties.
2.  Props are used to transfer data from one element to another.
3.  Props are read only can't be re-assigned.
4.  Props are just like a function->Parameters in JavaScript.
5.  Props are just passed as Object , containing all methods and        variables and nested objects.
_______________________________________________________________________

### How to change value?
1.  By using Class Component Life-cycle method
2.  Function Component using Hooks

_______________________________________________________________________

### State in React->
1.  The state is a built in react Object that is used to contain data or information about the component   
2.  A State can be modified based on user action or network changes.
3.  Every Time when the state of an object changes, React re-render the component to the browser. 


_______________________________________________________________________
### Rules of Hooks-
1.  Must be written inside a function component.
2.  must be import in component.
3.  must be call at top level of component.
4.  cannot be conditional.

______________________________________________________________________
### useState Hook-
1.  The React useState Hook allows us to track state in a function component.
2.  State generally refers to data or properties that need to be tracking in an application
3. 
```
useState accepts an initial state and returns two values:
    a. The current state.
    b.  A function that updates the state.
Eg.   const [count, setCount] = useState(0);
```
______________________________________________________________________
### useEffect Hook-
1.  The React useEffect Hook allows us to run some code after the first render of a component.
2.  It’s called once, both on the initial render and every time the component re-renders.
3.  If you pass an empty array, it will render the entire component again for the very first time.
4.  When we pass dependency array into useEffect, then only those dependencies which have changed since last render will cause the effect to execute.
5.  If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
6.  Eg. used when Timer Functions, DOM manupulation , fetch data.
7.  ``` useEffect(<function>, <dependency>) ```
______________________________________________________________________
### useRef-
1.  Directly - DOM Manupulation
2.  useRef returns a ref object with a single **current** property initially set to the initial value you provided.
3.  ```const ref = useRef(initialValue)```
4. usage:
    - For storing value from form input fields
    - Referencing a value with a ref
    - Manipulating the DOM with a ref
    - Avoiding recreating the ref contents
_______________________________________________________________
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
_______________________________________________
### Context API / useState Hook-
1.  Creator: a new context ```const DataContext = createContext();```
2.  Provider- wrap the Components
        ```   
        <DataContext.Provider value={{ fname, lname}}> 
        <>
         </DataContext.Provider> 
        ```
3.  Consumer-     
        ```  
        <DataContext.Consumer>
            {({ fname, lname }) => (
                <>
                    <h1>{fname}</h1>
                    <h1>{lname}</h1>
                </>
            )}
        </DataContext.Consumer>
         ```
4.  **Problem**- Nesting(wrapping increase) leads to arise problem like Callback hell.
5.  **Solution** useContext Hook
_______________________________________________
### useContext Hook-
1.  React Context is a way to manage state globally.
2.  It can be used together with the useState Hook to share state between 
    deeply nested components more easily than with useState alone.
3.  usage:
    - create   -same
    - provider -same
    - useContext   - uses context from any parent or grandparent etc.

______________________________________________
### Memoization-
1. an optimization technique for accelerating computer programs by caching the 
    results of heavy function calls and returning them when similar inputs are encountered repeatedly.
2.  React memoization is similar to caching.
3.  Avoid unnecessary calls.

### useMemo-
1.  memoization as caching a value so that it does not need to be recalculated.
2.   React useMemo Hook returns a memoized value.
3.   useMemo Hook only runs when one of its dependencies update.

_______________________________________________
### What is usecallback?
1.  The useCallback and useMemo Hooks are used to optimize the re-rendering of components in React. They help us avoid unnecessary renders.
2.  The main difference between the two hooks, useCallback and useMemo, is that useCallback will always return a new memoized function if any of its dependencies change.
3.  The useMemo Hook will always return the same value if the dependencies array is the same.
------------------------------------------------------------
#### Problem ->
1. on clicking add every time Child A is printed  !!-> useMemo ko apply karien to?? ->wrap karo ->fir sirf 1 baar hi print hoga(render).
2. but agar childA me props pass karein -> phir wahi problem hogi -> useMemo ke baad bhi ->Re-Render Hoga, Why? 
    REFERENTIAL EQAULITY-(functions are re-created when any re rendering occurs).   
#### Solution-> useCallback

-----------------------------------------------------------

### How to use useCallback with example?     
1.  ``` Syntax- const cachedFn = useCallback(fn, dependencies)```
2. The useCallback Hook only runs when one of its dependencies update.


_________________________________________________________________________
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

---------------------------------------------------------------------------

### Lifting State-up or pass data from child to parent ->
1.   Make a function in Parent and pass it(using props) to child component.
2.  in child component call that function and pass the data(as Parameter) that has to be send to parent component.

-------------------------------------------------------------------------

### Rendering of List in React -
1. use map just like in JS  ``` {IPL.map((team)=> <h1> {team} </h1> )} , where IPL is array.```
2.  Warning: Each child in a list should have a**unique "key" prop**.
    -   Why- instead to changing only one(that is added), it update(render) all elements in the list.
    -   **Solution-  use Keys**-
    -   .  Keys help React identify which items have changed, are added or removed. Keys should be given to the elements
    -   inside the array to give the elements a stable identify.
    -   Keys should be unique.
    -   index can be used as a key.

______________________________________________
### useState hooks with objects-

_________________________________________________________________________
### useState hooks with Arrays-

_________________________________________________________________________
### useReducer Hook- 
1.  similar to useState, allows to manage state.
2.  allows for custom logic(complex logic).
3.  ```const [state, dispatch] = useReducer(reducer fn , initialState)```
4.  The reducer function contains your custom state logic and the initialStatecan be a simple value 
    but generally will contain an object, manage the state.
    reducer - takes current state and action and returns new state.
    ```newState= reducer(currentState, action)```
5.  The useReducer Hook returns the current stateand a dispatch method.

__________________________________________________________________________
### custom Hooks-
1.  A custom Hook is a JS function whose name starts with "use"
2.  We can use other Hooks in custom hooks as well

### Why to use custom hooks?
1.  to remove the duplicated logic in components and we can extract that logic to custom hooks.
2.  Example: useFetch
_________________________________________________________________________
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
10.  Axios does not have any dependencies.

_______________________________________________________________________________
### How to install axios?
```  npm i axios ```
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
-   Note:- In class based components you have to bind the functions. But in functional components it's not needed.
___________________________________________________________________
### Destructuring in React:

_______________________________________________

### Conditional Rendering in React.js:

-   if/else
-   Element Variables
-   Ternary Operator
-   Short Circuit Operator
_______________________________________________
### React CSS Styling-
1.  Inline CSS
    -   To style an element with the **inline style** attribute, the value must be a JavaScript object.
    ```  <h1 style={{color: "red"}}>Hello Style!</h1> ```
    -   {{}}
    -   Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with **camel case** syntax,
    - eg. ``` Use backgroundColor instead of background-color ```

2.  External Style Sheet-
    -   You can write your CSS styling in a separate file, just save the file with the .css file extension, 
        and import it in your application.
3.  CSS Module
__________________________________________________

### React Router V6-
1.  React Router enables "client side routing".
2.  React router is fully featured client and server side routing JS library for building user interface.
3.  Client side routing allows your app to update the URL from a link click without making another request for another document from the server. It provides API's which are easy to understand
4.  Usage-
    - Installation : ```npm install react-router-dom```
    - import BrowserRouter in index.js file
    - wrap your application(<App/>) in index.js
```
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
```
_______________________________________________
### React Router Component-
1.  **BrowserRouter**
    -   BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState, and popState events) to keep you UI in sync with the URL. 
    -   It is a parent component that is used to store all of the other components.
2.  **Routes**
    -  It’s a new component introduced in the v6 and an upgrade of the component. The main advantages of Routes over Switch are:
    -   Relative s and s
    -   Routes are chosen based on the best match instead of being traversed in order.

3.  **Route**: 
    -   Route is the conditionally shown component that renders some UI when its path matches the current URL.
4.  **Link**: 
    -   The link component is used to create links to different routes and implement navigation around the application. 
    -   It works like an HTML anchor tag.

```
<Routes>
    <Route path="/" element={ <div> I'm Home Page </div>}>
    <Route path="/contact" element={<Contact/>}
    <Link to="/about">About</Link>
</Routes>
```
________________________________________________________________________
### What is middleware in Redux?
-   Middleware is a higher-order function that intercepts actions before they reach the reducers. 
-   Middleware functions are where you handle cross cutting concerns
-   Middleware is a way to intercept actions before they reach the Redux store. Middleware functions are executed synchronously from top to bottom. 
- Middleware is a higher order function that intercepts actions before they reach the reducers.