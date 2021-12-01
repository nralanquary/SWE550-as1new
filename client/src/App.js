import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const apiBaseURL = 'http://localhost:5000'

function App() {

  const [employees, setEmployees] = useState([]); 
  const [employee, setEmployee] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''}) 
  
  const setlnput = (e) => { 
    const {name, value} = e.target; 
    console.log(value); 
    if (name === 'EmployeeID' || name === 'Age') { 
      setEmployee(prevState => ({ 
        ...prevState, 
        [name]: parseInt(value) 
      })); 
      return; 
    } 
      setEmployee(prevState => ({ 
        ...prevState, 
        [name]: value 
      }));
  } 

  const fetchData = async () => {
    console.log(employee); 
    const newData = await fetch(apiBaseURL + '/api', { 
        method: 'POST', 
        headers: { 
          'content-type': 'application/json', 
          'Accept': 'application/json' 
        }, 
        body: JSON.stringify({ 
          count: employee.Count 
        })
      })
      .then(res => res.json()); 
      console.log(newData); 
      setEmployees(newData); 
  } 

  const createEmployees = async () => {
    const newData = await fetch(apiBaseURL + '/hello', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        }, 
        body: JSON.stringify({ 
          ...employee 
        })
      })
      .then(res => (console.log(res), res.json())); 
     console.log(newData); 
      setEmployees([...employees, newData]); 
  }
  return (
    <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           1st Assignment
         </p>
         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
           Nourah Alanquary <br/>Welcome to the "React-Docker" app page
         </a>  <br/> 
        <input type="number" name="EmployeeID" placeholder="EmployeeID" onChange={setlnput}></input> 
        <input name="Firstname" placeholder="Firstname" onChange={setlnput}></input> 
        <input name="Lastname" placeholder="Lastname" onChange={setlnput}></input> 
        <input type="number" name="Age" placeholder="Age" onChange={setlnput}></input> 
        <input name="Gender" placeholder="Gender" onChange={setlnput}></input> 
        <button onClick={() => createEmployees()}>..   Create   ..</button> 
        <br/>
        <input name="Count" placeholder="Count" onChange={setlnput}></input> 
        <button onClick={() => fetchData()}>..Retrieve by Firstname..</button>
        {
          employees.map(employee => (
            <div key={employee._id}>
            <p>EmployeelD: {employee.EmployeeID}</p> 
              <p>Firstname: {employee.Firstname}</p> 
              <p>Lastname: {employee.Lastname}</p> 
              <p>Age: {employee.Age}</p> 
              <p>Gender: {employee.Gender}</p> 
            </div>
          ))
        } 
       
        </header>
    </div>
  );
}
export default App;


//__________________________________________________________________________________________

// class Retrieve extends Component {  
  
//   constructor(props) {
//     super(props)

//     this.state = {
//       rows: '',
//       names:[] 
//     }
//   }  
//  /*................*/  handeleRows(event) {this.setState({ rows: event.target.value});}

//  componentDidMount () {
//    fetch('/')
//      .then(res => res.json())
//      .then(names=> this.setState({names} , () => console.log('Data fetched...',
//       names)));   
//  }

//  onSubmit = (event) => {
//     event.preventDefault();
//     let Rows = this.state.rows;  
//           // On submit send a POST request with the data to the server.
//          
//   }

//  getRows = () => {
//    axios.get('/api')
//     .then((response) => {
//     })
//     .catch(() => {
//       alert('Error retrieving data!!!');
//     });
//  }
 
// /*
// <button onClick= { () => fetchData()}> Click </button>;
// <p>List of requested Rows: {returnedData.name}</p>
// */
//   render() {
//     return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           1st Assignment
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Nourah Alanquary <br/>Welcome to the "React-Docker" app page
//         </a>  <br/><br/><br/>
//         <div>
//         <form onSubmit={this.onSubmit}>
//         <label>Insert number of "Rows" to retrieve &nbsp; </label> <br/>
//         <input id="Name" type="text" onChange={this.handeleRows.bind(this)} placeholder="Ex.: 20" required />
//         <button type="submit" className="btn btn-primary">Submit ...</button><br/> <br/>
//         </form>
//         </div>
//         <ul>
//           {this.state.names.map(names =>
//             <li key={names.id}> {names.firstname} </li>
//           )}
//         </ul>
//       </header>
//     </div>
//   );
//   }
// }

// export default Retrieve;