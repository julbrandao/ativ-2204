

const express = require('express');
const router = express.Router();
const { Turma } = require('../models');

//Listar categoria
router.get("/", async (req, res) => {
    const turmas = await Turma.findAll();
    res.render(
        "base", {
            title: "Listar Turmas",
            view: "turmas/show",
            turmas,
    });
});

//add nova categoria - formulário
router.get("/add", async (req, res) => {
    res.render(
        "base", {
            title: "Adicionar Turma",
            view: "turmas/add",
    });
});

//add nova categoria - no bd
router.post("/add", async(req, res) =>{
    await Turma.create({nome: req.body.nome});
    res.redirect("/turmas")
});

//edit categoria - formulário
router.get("/edit/:id", async (req, res) => {
    const turma = await Turma.findByPk(req.params.id);
    res.render(
        "base", {
            title: "Editar Turma",
            view: "turmas/edit",
            turma,
    });
});

//edit categoria - no bd
router.post("/edit/:id", async(req, res) =>{
    await Turma.update(
        {nome: req.body.nome},
        {where:{id: req.params.id}}
    );
    res.redirect("/turmas")
});

//excluir categoria
router.post("/delete/:id", async(req, res) =>{
    await Turma.destroy({where:{id: req.params.id}});
    res.redirect("/turmas")
});

module.exports = router;