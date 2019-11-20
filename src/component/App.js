import React,{Component} from 'react';
import Home from './Home/Home';
import '../style/style.css';
import { BrowserRouter as Router,Link } from "react-router-dom";
import $ from 'jquery';
window.jquery = $;
window.$ = $;
global.jquery = $;

class App extends Component{
    render(){
    return (
        <Router>
    <div className="header">
        <div className="container warna">
            <nav className="navbar navbar-expand-lg navbar-light warna">
                <Link className="navbar-brand" to=""> <img className="logo" src={require('../logo/logo1.png')} alt="logo"/></Link>
                <button className="navbar-toggler toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto">   
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false">
                                    Promo
                                </Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="">Promo</Link>
                                <Link className="dropdown-item" to="">Partnership</Link>
                                </div>   
                                </li>
                                <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false">
                                paket & Add-On
                                </Link>
                                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="">Action</Link>
                                <Link className="dropdown-item" to="">Another action</Link>
                                <div className="dropdown-divider"></div>
                                
                                </div>
                            </li>
                                <li className="nav-item">
                                <Link className="nav-link text-white">Pusat Bantuan</Link>
                                </li>
                    </ul>
                </div>           
            </nav>
        </div>
            <div className="">
            <Home/>
      </div>
    </div>
    </Router>
    )
  }
  }
  export default App;