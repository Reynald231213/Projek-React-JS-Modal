/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";  

class List extends React.Component { 
	render(){
    return(
  
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-3">Selamat Datang !</h1>
    <p class="lead">di Belajar Pemrograman Dasar.</p>

          <div class ="row">

            <div class="col-sm-6">
              <div class="card">
                <div class = "card-body">
                  <h5 class = "card-title">HTML</h5>
                  <p class="card-text">Klik Untuk Lebih lanjut !</p>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Klik
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">HTML</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      HTML sebagai bahasa mark up sangatlah mudah untuk dipahami bahkan bagi webmaster pemula di bidang web developer 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
        <button type="button" class="btn btn-primary">Lanjut</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
            <div class="col-sm-6">
              <div class="card">
                <div class = "card-body">
                  <h5 class = "card-title">PHP</h5>
                  <p class="card-text">Klik Untuk Lebih lanjut !</p>
                  <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
Klik
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">PHP</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Hypertext Preprocessor adalah bahasa skrip yang dapat ditanamkan atau disisipkan ke dalam HTML.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
        <button type="button" class="btn btn-primary">Lanjut</button>
      </div>
    </div>
  </div>
</div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class = "card-body">
                  <h5 class = "card-title">CSS</h5>
                  <p class="card-text">Klik Untuk Lebih lanjut !</p>
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Klik
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">CSS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih menarik dan enak dipandang
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
        <button type="button" class="btn btn-primary">Lanjut</button>
      </div>
    </div>
  </div>
</div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class = "card-body">
                  <h5 class = "card-title">Javascript</h5>
                  <p class="card-text">Klik Untuk Lebih lanjut !</p>
                  <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
  Klik
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Javascript</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      JavaScript adalah Pemrograman Tingkat Tinggi
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
        <button type="button" class="btn btn-primary">Lanjut</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
                </div>
              </div>
            </div>
          </div>
        

    );
  }
  }
export default List;