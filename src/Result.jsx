
// first method
/*const Result = ({count , inc , dec , reset}) => {
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={reset}>Reseat</button>
    </div>
  )
}*/

// second method
/*import React from 'react'

const Result = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.inc}>Increase</button>
      <button onClick={props.dec}>Decrease</button>
      <button onClick={props.reset}>Reseat</button>
    </div>
  )
}*/
// thired method the best
// import React from 'react'

// const Result = (props) => {
//     let {count , inc , dec , reset} = props;
//   return (
//     <div>
//       
//         <h1>{count}</h1>
//       <button onClick={inc}>Increase</button>
//       <button onClick={dec}>Decrease</button>
//       <button onClick={reset}>Reseat</button>
//     </div>
//   )
// }
// 


// added x to in component the first method
// const Result = (props) => {
//     let {count , inc , dec , reset, x} = props;
//   return (
//     <div>
//         {x}
//         <h1>{count}</h1>
//       <button onClick={inc}>Increase</button>
//       <button onClick={dec}>Decrease</button>
//       <button onClick={reset}>Reseat</button>
//     </div>
//   )
// }
// Result.defaultProps ={
//     x:80
// }





// added x to in component the first method

// const Result = (props) => {
//     let {count , inc , dec , reset, x} = props;
//   return (
//     <div>
//         {x || 60}
//         <h1>{count}</h1>
//       <button onClick={inc}>Increase</button>
//       <button onClick={dec}>Decrease</button>
//       <button onClick={reset}>Reseat</button>
//     </div>
//   )
// }
///add style with if
const Result = (props) => {
    let {count , inc , dec , reset, x} = props;
  return (
    <div>
        {x || 60}
        <h1 style={{color:count==0?"red":"blue"}}>{count}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={reset}>Reseat</button>
    </div>
  )
}




export default Result



