import "./App.css";




// import { useState } from "react";
// import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
// import UseCallback from "./Hooks/UseCallback";
// import FetchUser from "./Components/Fetch_User";
// import Forms from "./Components/forms";
// import ChildB from "./Hooks/ChildB";
// import Counter from "./Hooks/Counter";
// import Custom from "./Hooks/Custom";
// import AxiosTutorial from "./Components/AxiosTutorial";
// import AxiosPost from './Components/AxiosPost';
// import AxiosUpdate from "./Components/AxiosUpdate";



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

  
  return (
    <div>
      <h1> Hola... I'm Learning React</h1>
      {/* <h2>{x}</h2>
      <button onClick={updateState}>Click me to Change x</button> */}


      {/* <FetchUser/> */}
 
      {/* <UseEffect/> */}

      <UseRef/>
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

    </div>
  );
}

export default App;
