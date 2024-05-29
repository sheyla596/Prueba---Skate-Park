import express from "express";
const router = express.Router();
import { home, login,registro,Admin} from "../controllers/render.controllers.js";
import { agregarParticipante, editarParticipante, borrarParticipante, editarStatus } from "../controllers/user.controllers.js";
import { iniciarSesion, validarToken } from "../controllers/login.controllers.js";

router.get('/',home);//devuelve el registro de los participantes

router.get('/registro', registro);//formulario de inscripción

router.post('/skaters', agregarParticipante);//Agregar participante a la base de datos

router.put('/skaters', editarParticipante);

router.put('/skaters/status/:id', editarStatus)

router.delete('/skaters/:id',borrarParticipante)

//loggeo
router.get('/login',login);
router.post('/login',iniciarSesion);

router.get('/Perfil',validarToken);
router.get('/Admin',Admin);




export default router