import { query, Request, Response } from "express";
import balneabilidade from "../models/balneabilidade";
const csv = require("csv-parser");
const fs = require("fs");
const path = require('path');
import Balneabilidade from "../models/balneabilidade"


export default class TesteController{

async downloadCsv(req:Request, res:Response):Promise<Response>{
       
    try {
        const csvpath = path.resolve('src/datasets', "./ba-balneabilidade.csv");
        const results:any=[];
        fs.createReadStream(csvpath).pipe(csv({})).on('data',(data:any)=>results.push(data)).on('end',()=>{
            const balneabilidade =  Balneabilidade.create(results);});
        return res.status(201).json(balneabilidade);
        
    } catch (error) {
        return res.status(400).json("deu erro");
    }  
}


async getData(req: Request, res: Response): Promise<Response> {
    
    try {
        const result = await Balneabilidade.find();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


async getDataPageable(req: Request, res: Response): Promise<Response> {
    
    try {
        const page = parseInt(String(req.query.page), 10) || 1;
        const limit = parseInt(String(req.query.limit), 10) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = await Balneabilidade.find().skip(startIndex).limit(limit);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

async getDataFiltered(req: Request, res: Response, query: object): Promise<Response> {
    try {      

        const result = await Balneabilidade.find(query);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

async deleteAll(req: Request, res: Response): Promise<Response> {
    try {      

        const result = await Balneabilidade.remove();
        return res.status(200).json("Banco deletado com sucesso");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


}
