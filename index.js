import express from "express";
const app=express();
const PORT = process.env.PORT || 3002;
const __dirname = import.meta.dirname;
import {engine}  from 'express-handlebars';
import router from "./routes/routes.js";
import path from "path";
import fileUpload from 'express-fileupload'

// Middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('views'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/css'));
//fileUpload
app.use(
    fileUpload({
      limits: {fileSize:5000000},
      abortOnLimit: true,
      responseOnLimit: 'El tamaño de la imagen supera el límite permitido',
    })
  ); 
  app.use(express.urlencoded({ extended: false }));
  app.use("/",router);
  
// //motor de plantilla
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'), 
}));



//Llamada servidor
app.listen(PORT,()=>{
    console.log(`Server running on Port http://localhost:${PORT}`)
});