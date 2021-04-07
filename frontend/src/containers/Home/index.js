import React from 'react';
import Layout from "../../components/Layout";
import { Jumbotron , Row , Col , Container } from 'react-bootstrap';
import "./style.css";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <Layout sidebar>
      </Layout>
      <div style={{ 
        backgroundImage: `url('http://localhost:2000/public/calendargif.gif')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginTop : "5%",
        marginLeft:"35%",
        height:"60vh",
        width:'30%' 
      }}></div>
    </div>
  )
}

export default Home