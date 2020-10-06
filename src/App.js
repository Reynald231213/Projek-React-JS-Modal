import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
        <hr />
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-danger">
  <a class="navbar-brand" href="/List">Belajar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/List">Beranda <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Jadwal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tugas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Lowongan</a>
      </li>
    </ul>
  </div>
</nav>
        <hr />
        <p><Utama /></p>
      </div>
    );
  }
}
export default App;