Learn React->

________________________________________________________________________
What is JSX?
1.  Stands for JavaScript XML or Extension.
2.  with the help of JSX we xan write and add HTML in React.
3.  JSX converts HTML tags into React element.
4.  Its not compulsory to use JSX.
________________________________________________________________________

Rules for Writing JSX-
1.  HTML code must wrap into one top level element -(Parent).
2.  Each HTML tag must be closed properly
3.  Attripbute class = className
4.  No if-else condition jsx but ternary opearator can be used.
5.  JS expression in JSX must be wrapped in {}
_______________________________________________________________________
Babel is JS compiler, which convert JSX into Pure JS.
________________________________________________________________________

What is Props?
1.  stands for Properties.
2.  Props are used to transfer data from one element to another.
3.  Props are read only can't be re-assigned.
4.  Props are just like a function->Parameters in JavaScript.
5.  Props are just passed as Object , containing all methods and        variables and nested objects.
_______________________________________________________________________

How to change value?
1.  By using Class Component Life-cycle method
2.  Function Component using Hooks

_______________________________________________________________________

State in React->
1.  The state is a built in react Object that is used to contain data or information about the component   
2.  A State can be modified based on user action or network changes.
3.  Every Time when the state of an object changes, React re-render the component to the browswr. 


_______________________________________________________________________
Rules of Hooks-
1.  Must be written inside a function component.
2.  must be import in component.
3.  must be call at top level of component.
4.  cannot be conditional.

______________________________________________________________________

What is usecallback?
1.  The useCallback and useMemo Hooks are used to optimize the re-rendering of components in React. They help us avoid unnecessary renders.
2.  The main difference between the two hooks, useCallback and useMemo, is that useCallback will always return a new memoized function if any of its dependencies change.
3.  The useMemo Hook will always return the same value if the dependencies array is the same.
------------------------------------------------------------
Problem ->
1. on clicking add every time Child A is printed  !!-> useMemo ko apply karien to?? ->wrap karo ->fir sirf 1 baar hi print hoga(render).
2. but agar childA me props pass karein -> phir wahi problem hogi -> useMemo ke baad bhi ->Re-Render Hoga, Why? 
    REFERENTIAL EQAULITY-(functions are re-created when any re rendering occurs).   
Solution-> useCallback

-----------------------------------------------------------
How to use useCallback with example?
/*      
1.      Syntax- 
            const cachedFn = useCallback(fn, dependencies)
2.      The useCallback Hook only runs when one of its dependencies update.


_________________________________________________________________________________________________________
React Form->
1.  Defaut behavior of HTML form is browsing to a new page on submit -> 
    direct form didn't (edit the value of input field) because in react value is treated as props(read-only behavior).

2.  Other one when -Manupalation of form data requires JS function there is a standard way to achieve this with a technique called "controlled Components".+_

3.  You can control the values of more than one input field by adding a name attribute to each element.
    We will initialize our state with an empty object.
    To access the fields in the event handler use the event.target.name and event.target.value syntax.
    To update the state, use square brackets [bracket notation] around the property name.
    
4.  Uncontrolled Components-
    When you don't provide a value prop for an <input> element, it becomes uncontrolled.
    To write a uncontrolled component, instead of writing a click handler, you can use the ref to get from the DOM.

________________________________________________________________________

Lifting State-up or pass data from child to parent->
1.   Make a function in Parent and pass it(using props) to child component.
2.  in child component call that function and pass the data(as Parameter) that has to be send to parent component.

________________________________________________________________________

Rendering of List in React :-
1.   use map just like in JS =={IPL.map((team)=> <h1> {team} </h1> )}, where IPL is array.
2.  Warning: Each child in a list should have a unique "key" prop.
    Why- instead to changing only one(that is added), it update(render) all elements in the list.
    Solution-  use Keys-
    a.  Keys help React identify which items have changed, are added or removed. Keys should be given to the elements
    inside the array to give the elements a stable identify.
    b.  Keys should be unique.
    c.  index can be used as a key.


