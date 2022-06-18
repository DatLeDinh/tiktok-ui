import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;





// const courses = [
//   {
//     id:1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript' 
//   },
//   {
//     id: 3,
//     name: 'React' 
//   }
// ]

// function App() {

//   const [checked, setChecked] = useState([])
//   // console.log(checked)

//   const handleSubmit = () => {
//     console.log({ id: checked})
//   }
//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if(isChecked){
//         return checked.filter(item => item !==id)
//       }
//       else{
//         return [...prev,id]
//       }
//     })

//   }
  
//   return (
//     <div style = {{padding:60}}>
//       {courses.map(course => (
//         <div key = {course.id}>
//             <input
//               type = 'checkbox'
//               checked = {checked.includes(course.id)} 
//               onChange = {() => handleCheck(course.id)}
//             />
//             {course.name}
//         </div>
//       ))}
//       <button onClick = {handleSubmit}>Submit</button>
    

//     </div>
//   ) 
// }



// function App(){
//   const [job,setJob] = useState('')
//   const [jobs,setJobs] = useState([])
  
//   const handleSubmit = () =>{
//     setJobs(prev => [...prev, job])
//     setJob('')
//   }

//   return(
//     <div style={{padding:32}}>
//       <input value={job} onChange={e=>setJob(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {jobs.map((job,index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>

//     </div>
//   )
// }


// export default App;






