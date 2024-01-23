const express = require('express');
const path = require('path');
module.exports = {
    home:(req,res)=>{
        res.render('home');
    },
    pages:(req,res)=>{
        res.render('pages');
    }
}