import {
    addParticipante,
    deleteParticipante,
    editParticipante,
    editStatus
  } from "../queries/user.consultas.js";
  
  export const agregarParticipante = async (req, res) => {
    const { email, nombre, password, anos_experiencia, especialidad } = req.body;
    const { foto } = req.files;
    const { name } = foto;
    const titulo = `${name}`;
    const uploadPath = `/uploads/${titulo}`;
    const data = [
      email,
      nombre,
      password,
      anos_experiencia,
      especialidad,
      uploadPath,
    ];
    console.log(data);
    foto.mv(`public${uploadPath}`, async (err) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      try {
        await addParticipante(data);
        res.status(201).redirect("/login");
      } catch (error) {
        res.status(500).send(error.message);
      }
    });
  };
  
  export const editarParticipante = async (req, res) => {
    try {
      const { email, nombre, password, anos_experiencia, especialidad } = req.body;
      const data = [nombre, password, anos_experiencia, especialidad, email];
      await editParticipante(data);
      res.send("Los cambios se han realizado con éxito");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  export const borrarParticipante = async (req, res) => {
    try {
      const { id } = req.params; //captura por url
      await deleteParticipante(id);
      res.send("Eliminado");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  export const editarStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { estado } = req.body;
  
      await editStatus(id,estado);
      res.send("Los cambios se han realizado con éxito");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };