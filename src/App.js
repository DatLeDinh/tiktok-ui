import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          {publicRoutes.map((route, index) => {
            // const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
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
