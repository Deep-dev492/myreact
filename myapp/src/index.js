import React, { useCallback, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Intro';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';


//Select then ctrl+? will help you to comment several lines and same way you
// can remove comment from multiple lines


//props

// function University(props){
//   return<h2>I am doing my Masters and PhD from {props.value.U1} and {props.value.U2} respectively .</h2>
// }

// function Name(){
//   const U_name={U1:"Kanpur university,Kanpur",U2:"SGVU"};       //passing value as comonent
// return(
// <>
// <h1>From which university you are doing PhD?</h1>
// <University value={U_name}/>
// </>
// )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <Name/>
//   </React.StrictMode>
// );

// //Event
// function Marks(){
//   const number=(arg)=>
//   {
//     alert(arg);
//   }

// //   return(                                                        //There are different types of event onClick,onMouseEnter,onMouseLeave etc
// //     <button onMouseLeave={number}>Click this</button>        //button 
                                                          
// //   )
// //}    

// return(
//        <button onClick={()=> number("Distinction")}>Click this</button>              //text box(input type)
//     )
//   } 


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <Marks/>
//   </React.StrictMode>
// );
  



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//conditionals

// function Pass()
// {
//   return("congratulations");
// }

// function Fail()
// {
//   return("Try again");
// }

// function Result(p){
//   const status=p.isMessege;

//   if(status){
//     return<Pass/>
//   }
//   {
//     return<Fail/>
//   }

// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <Result isMessege={false}/>
//   </React.StrictMode>
// );

//reportWebVitals();


//Ternary operator
//  function Accept(){
//   return(<h1 style={{color:'red',backgroundColor:'yellow',textAlign:'center',display:'inline-block',marginLeft:30}}>hello"</h1>);
//  // return<h2>Congrats!! your proposal accepted</h2>
//  }

//  function Reject(){
//   return<h2>Sorry,Your proposal is rejected..try again</h2>

//  }

//  function Proposal(props){
//   const val=props.isCheck;
//   return(
//     <>
//     {val ? <Accept/>:<Reject/>}
//     </>
//   );
//  }

//  const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <Proposal isCheck={true}/>
//   </React.StrictMode>
// );

// reportWebVitals();


// //map function  in flow

// function Require(props)
// {
//   return<li> These are the required documents {props.val}</li>
// }

// function Enroll(){
//   const items=['Aadhar card','passport','Birth certificate'];

//   return(
//     <>
//     <h1>List of documents</h1>
//     <ul>{items.map((doc)=><Require val ={doc}/>)} 
//     </ul>
    
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <Enroll/>
//   </React.StrictMode>
// );

// reportWebVitals();


// //map function doubt

// function Shots(props)
// {
//   return<li> These are the required documents {props.shot}</li>
// }

// function Cricket(props){
//   const shots=['six','four','3 runs','wide ball '];

//   return(
//     <>
//     <h1>List of shots:- </h1>
//     <ul>{Shots.map((shot)=><Shots shot={shot}/>)} 
//     </ul>
    
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <Cricket/>
//   </React.StrictMode>
// );

// reportWebVitals();





//HOOKS
//useState
//import { useState } from 'react';
//setColor is a inbuilt function
// if we want to write more than one line in return then use <>write here as many lines as you need.</>
//This is called empty div tag<></>

//function based Hooks
// function Result(){
   
//   const[res,setResult] =useState("");

//   return<>
//   <h2>   Hey!  I {res} the exam. </h2>                     
//   <button type="button" onClick={()=>setResult("pass")}>Click here</button>
//   </>
  
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <Result/>
//   </React.StrictMode>
// );

// reportWebVitals();


//Object based function in HOOKS

// function Result(){
   
//     const[res,setResult] =useState({
//       distinction:"got 77% marks",
//       pass:"got 60% marks",
//       fail:"need to try again for "
//     });
  
  
//     return<>
//    <h2>   Hey!  I {res.pass} in English and {res.distinction} in Maths . </h2> 
//     <h2>but sorry to say in french {res.fail } next attempt in the exam</h2>                      
    
    
//     </>
// }
    
  
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
      
//       <Result/>
//     </React.StrictMode>
//   );
  
//   reportWebVitals();


//use of useState in form of array

//  function Result(){
   
//       const[res,setResult] =useState({
//         Distinction:"A+",
//         Pass:"B",
//         Fail:"C"
//        });
    
    
//       return<>
//      <h2>  In first semester your score was {res.Distinction}but in 2nd semster I got {res.Fail} . </h2> 
//      {/* <button type="button" onClick={()=>setResult({Distinction:"simply pass"},{fail:"distinction"})}>   //doubt */}
//       <button type="button" onClick={()=>setResult({Distinction:"fail"})}>               
//       Hit this!!
//      </button>
                           
      
//       </>
//   }
      
    
    
//      const root = ReactDOM.createRoot(document.getElementById('root'));
//      root.render(
//        <React.StrictMode>
        
//          <Result/>
//        </React.StrictMode>
//      );
    
//      reportWebVitals();
  
  

//Spread operator

//with the use of we can change witin object like here in line 290{res.Distinction} is as it is but {res.Fail}
//value changed

// function Result(){
   
//         const[res,setResult] =useState({
//           Distinction:"A+",
//           Pass:"B",
//           Fail:"C"
//          });

//          const revisedResult=()=>{
//           setResult(previousState=>{return{...previousState,Fail:"try again"}})
//           }

//           return(
//           <>
          
//           <h1>Result!!</h1>
//           <h2>My first samester marks for English is Grade {res.Distinction} and in Hindi {res.Fail} .</h2>
//           <button type="button" onClick={revisedResult}>
//             Details..Click here
//           </button>
          
//           </>)
//         }

//         const root = ReactDOM.createRoot(document.getElementById('root'));
//      root.render(
//        <React.StrictMode>
        
//          <Result/>
//        </React.StrictMode>
//      );
    
    //  reportWebVitals();


    //Event
    //if we do the following we cant change on 3000port .we can do changes only in useState("")line314
    //with the use of onChange{}line 331 we can do changes

//     function AdmissionForm()
// {
//   const[fname,setFname]=useState("Deep Shikha");

//   return(
//     <form>
//       Enter full name:<input type="text" value={fname}/>
//     </form>
//   )
// }       or

// function AdmissionForm()
// {
//   const[fname,setFname]=useState("Deep Shikha");

//   return(
//     <form>
      
        
//          Enter full name:<input type="text" onChange={(val)=>setFname(val.target.value)} value={fname}/>
      
    
//     </form>
    
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
//      root.render(
//        <React.StrictMode>
        
//          <AdmissionForm/>
//        </React.StrictMode>
//      );
    
//      reportWebVitals();


// A complete form 
//Event
//doubt

function Myform()
{
  const[inputs,setInputs]=useState({});

  
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setInputs(values=>({...values,[name]:value}))
}

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(inputs);
  
   alert(`Full name:${inputs.fname}\n Mobile No.:${inputs.mobileno}\n Address:${inputs.address}`);


  }

  return(

 <form onSubmit={handleSubmit}>
   Enter Full name:<input type="text" value={inputs.fname||""} name='fname' onChange={handleChange}/>
   Enter Mobile No.:<input type="number" value={inputs.mobileno||""} name='mobileno' onChange={handleChange}/>
   Enter Address:<textarea value={inputs.address||""} name='address' onChange={handleChange}/><textarea/> 
   <input type='submit'></input>
 </form>
   )
 }
 const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
        
         <Myform/>
       </React.StrictMode>
    );
    
      reportWebVitals();


     //example of {useEffect}
    //  function Counter(){
    //     const[count,setCount]=useState(0);   //for useState initialization -> object--- useState({})   for array-- useState([])

    //     useEffect(()=>{setTimeout(() =>{
    //         setCount((count) => count+1,5000);});
    //     } , []);

    // return<h2>Rendered{count}times!!</h2>
    // }
     

    //  const root = ReactDOM.createRoot(document.getElementById('root'));
    //  root.render(
    //    <React.StrictMode>
        
    //      <Counter/>
    //    </React.StrictMode>
    //  );
    
    //  reportWebVitals();
     


    //Example of useContext

//    const Namecontext=createContext();

//     function Team1(){
//         const[name,setName]=useState("Deep Shikha");

    

//     return(
//         <Namecontext.Provider value={name}>
//              <h1>{`Hello ${name}`}</h1>              
//             {/* {* //use ``.This is called backtick it is on keyboard under Esc button */} 
            
//             <Team2/>
//             </Namecontext.Provider>
//          )
//     }

//      function Team2(){

//         return(
//             <>
//            < Team3/>
//             </>
        
//         )
//     }
//     function Team3(){

//         return(
//             <>
//            < Team4/>
//             </>
        
//          )
//     }

//     function Team4(){
//         const name=useContext(Namecontext)

//         return(
//             <>
//             <h1>Welcome in Interschool competition</h1>
//             <h2>{`Hello ${name}`}</h2>
            
           
//             </>
        
//          )
//     }

    
//      const root = ReactDOM.createRoot(document.getElementById('root'));
//      root.render(
//        <React.StrictMode>
        
//          <Team1/>
//        </React.StrictMode>
//      );
    
//      reportWebVitals();
     