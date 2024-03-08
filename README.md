Learn React->

**************************************************************************************************
How to change value?
1.  By using Class Component Life-cycle method
2.  Function Component using Hooks

State in React->
1.  The state is a built in react Object that is used to contain data or information about the component   
2.  A State can be modified based on user action or network changes.
3.  Every Time when the state of an object changes, React re-render the component to the browswr. 
**********************************************************
Rules of Hooks-
1.  Must be written inside a function component.
2.  must be import in component.
3.  must be call at top level of component.
4.  cannot be conditional.


****************************************************************************************************
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



*****************************************************************************************************
React Form->
1.  Defaut behavior of HTML form is browsing to a new page on submit -> direct form didn't (edit the value of input field) because in react value is treated as props(read-only behavior).

2.  Other one when -Manupalation of form data requires JS function there is a standard way to achieve this with a technique called "controlled Components"
    ------------------------------------------------
    You can control the values of more than one input field by adding a name attribute to each element.
    We will initialize our state with an empty object.
    To access the fields in the event handler use the event.target.name and event.target.value syntax.
    To update the state, use square brackets [bracket notation] around the property name.
    --------------------------------------------------
    Uncontrolled Components-
    When you don't provide a value prop for an <input> element, it becomes uncontrolled.
    To write a uncontrolled component, instead of writing a click handler, you can use the ref to get from the DOM.