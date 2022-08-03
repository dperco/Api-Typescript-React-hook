import {Router,Request,Response} from 'express';

import { getApiData,getProducId } from '../contollers/index';
import { apiResponse } from '../types';
const router=Router();

router.get('/api/items/:id',getProducId);//traer un producto por id con detalle

 
router.get('/api/items',getApiData);// trae todos los productos  por query



export  default  router;



