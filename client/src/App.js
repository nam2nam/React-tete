import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id':1,
    'img' : 'https://lh3.googleusercontent.com/ygBeB4Ug1roppIZvrijsesps7NX0LRLrgY2Pt8_QRYHsetC0tGQR0l7mmm2CtRUrONNF91A=s151',
    'name' : '승ㅎ남',
    'birthday' : '910201',
    'gender' : '여',
    'job' : '회사원'
  },
  {
    'id':2,
    'img' : 'https://lh3.googleusercontent.com/ygBeB4Ug1roppIZvrijsesps7NX0LRLrgY2Pt8_QRYHsetC0tGQR0l7mmm2CtRUrONNF91A=s151',
    'name' : '승남2',
    'birthday' : '910201',
    'gender' : '여',
    'job' : '회사원'
  },
  {
    'id':3,
    'img' : 'https://lh3.googleusercontent.com/ygBeB4Ug1roppIZvrijsesps7NX0LRLrgY2Pt8_QRYHsetC0tGQR0l7mmm2CtRUrONNF91A=s151',
    'name' : '승남3',
    'birthday' : '910201',
    'gender' : '여',
    'job' : '회사원'
  }
]

class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                img={c.img}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
        
      </div>
    )
  }
}

/*
function App() { 
  return (
    <div className="gray-background">
      <header className="App-header">
        <h2>렛츠 관리 시스템~!</h2>
        <p>
          안늉 나는 화면
        </p>
      </header>
    </div>
  );
}
 */
export default App;
