import {
    getParticipantes
  } from "../queries/user.consultas.js";
  
  
  //llamada a página principal de la plantilla✅
  export const home = async(req,res)=>{
    const skaters= await getParticipantes();
    res.render("Home", {skaters});
  };
  export const registro = async(req,res)=>{  
  res.render("Registro");
  };
  
  export const login = async(req,res)=>{
    res.render("Login");
  };
  
  export const Admin = async(req,res)=>{
    const skaters= await getParticipantes();
    res.render("Admin",{skaters} );
  };
  
  