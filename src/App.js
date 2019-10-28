import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ src, title,paragraph,Link }) {
  return (
    <div>
    <img src={src} alt="Image 1"  className="card-img-top"/>
     <div className="card text-center">
       <div className="overflow">
     </div>
     <div className="card-body text-dark">
       <h4 className="card-title">{title}</h4>
       <p className="card-text text-secondary">  
       {paragraph}
       </p>
       <a href={Link} className="btn btn-outline-success">Go Anywhere</a>
     </div>
     </div>
     </div>

  );
}

export default App;
