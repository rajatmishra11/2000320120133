import "./App.css";
import Routing from "./Components/Routing";










// import { useState } from "react";
// import UseEffect from "./Hooks/UseEffect";
// import UseRef from "./Hooks/UseRef";
// import Parent from "./Hooks/PropDrilling";
// import UseContext from "./Hooks/UseContext";
// import UseContext2 from "./Hooks/UseContext2";
// import UseMemo from "./Hooks/UseMemo";
// import UseCallback from "./Hooks/UseCallback";
// import FetchUser from "./Components/Fetch_User";
// import Forms from "./Components/forms";
// import ChildB from "./Hooks/ChildB";
// import Counter from "./Hooks/Counter";
// import Custom from "./Hooks/Custom";
// import AxiosTutorial from "./Components/AxiosTutorial";
// import AxiosPost from './Components/AxiosPost';
// import AxiosUpdate from "./Components/AxiosUpdate";
// import AgeValidation from "./Components/AgeValidation";
// import Name from "./Components/Name";

function App() {

  // var x=10;
  // function updateState(){
  //   x=15;
  //   console.log(x)
  // }

  // function getData(data){
  //   console.log(data);
  // }


  // const IPL=["CSK", "RCB", "MI"];
  // const res=IPL.map((team)=> <h1> {team} </h1> );

  // const IPL= ["CSK", "RCB","MI", "CSK"];


  //   const l1=[
  //   {
  //     id:"1",
  //     name:"Shivi"
  //   },
  //   {
  //     id:"2",
  //     name:"Shivam"
  //   },
  //   {
  //     id:"3",
  //     name:"Rajat"
  //   }
  // ]
    


  // //--> use state with objects.
  // const [allValue, setValues]=useState({
  //   firstName: "Gauri",
  //   lastName : "Tiwari" 
  // })
  // function handleButton(){
  //   alert("You clicked me");  
  //   setValues({
  //     //spread operator is used to assigned default values of all properties in the object
  //     ...allValue,
  //     lastName: "Mishra"
  //   })
  // }



  // //-> use state with Array
  // const [items, setItems]= useState(["Khichdi"])
  // function handleAdd(){
  //   setItems(["rice", "daal", "Ghee", "Tadka"]);
  // }

  
  // const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  // const one=arr[0]
  // const two=arr[1]
  // const three=arr[2]

// const [one , two, three]=arr;
// console.log(one, two, three);

// const [one, two, three, ...rest]=arr;
// console.log(one, two, three, rest);

  return (
    <div>
      <h1>React</h1>
      {/* <h2>{x}</h2>
      <button onClick={updateState}>Click me to Change x</button> */}

      {/* <FetchUser/> */}
 
      {/* <UseEffect/> */}

      {/* <UseRef/> */}

      {/* <Parent/> */}

      {/* <UseContext/> */}

      {/* <UseContext2/> */}

      {/* <UseMemo/> */}

      {/* <UseCallback/> */}

      {/* <Forms/> */}

      {/* <ChildB getData={getData}/> */}


    {/*
      {IPL[0]} <br />
    {IPL[1]} <br />
    {IPL[2]} <br />
      */}
    {/* {IPL.map((team)=> <h1> {team} </h1> )}
      {res} */}


    {/* {IPL.map((team, index)=> <h1 key={index}> {team} </h1> )} */}

    {/* {l1.map((obj)=> <h1 key={obj.id} > {obj.name}</h1>)} */}

    {/* <h1>hello my name is {allValue.firstName} {allValue.lastName}</h1>
     <button onClick={handleButton}>Click here</button>  */}

    {/* <ol>
      {items.map(item=>( <li> {item}</li>))}
    </ol>
    <button onClick={handleAdd}>Reciepe</button> */}

    {/* <Counter/> */}

    {/* <Custom/> */}

    {/* <AxiosTutorial/> */}
 
    {/* <AxiosPost/> */}

    {/* <AxiosUpdate/> */}

    {/* <AgeValidation/> */}

    {/* <Name  fname= "John" lname="Doe"/> */}

    <Routing/>
    </div>
  );
}

export default App;
