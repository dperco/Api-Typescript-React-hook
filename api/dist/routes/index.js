"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../contollers/index");
const router = (0, express_1.Router)();
router.get('/api/items/:id', index_1.getProducId); //traer un producto por id con detalle
router.get('/api/items', index_1.getApiData); // trae todos los productos  por query
exports.default = router;
