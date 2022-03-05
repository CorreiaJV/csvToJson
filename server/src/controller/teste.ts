import { query, Request, Response } from "express";
import balneabilidade from "../models/balneabilidade";
import fs from 'mz/fs.js'
import * as csv from '@fast-csv/parse'
import path from 'path'
import CotaParlamentar from "../models/cotaParlamentar";

export default class TesteController{

async downloadCsv(req:Request, res:Response):Promise<Response>{
    const csvpath = path.resolve('src/datasets', "./cota-parlamentar.csv");
    const log = (data:any) => console.log(JSON.stringify(data, undefined, 2));       
    try {
    
    
        let headers = Object.keys(CotaParlamentar.schema.paths)
          .filter(k => ['_id','__v'].indexOf(k) === -1);
    
        console.log(headers);
    
        await new Promise((resolve,reject) => {
    
          let buffer:any = [],
              counter = 0;
    
          let stream = fs.createReadStream(csvpath)
            .pipe(csv.parse({ headers }))
            .on("error", reject)
            .on("data", async (doc:any) => {
              stream.pause();
              buffer.push(doc);
              counter++;
              log(doc);
              try {
                if ( counter > 10000 ) {
                  await CotaParlamentar.insertMany(buffer);
                  buffer = [];
                  counter = 0;
                }
              } catch(e) {
                stream.destroy(e);
              }
    
              stream.resume();
    
            })
            .on("end", async () => {
              try {
                if ( counter > 0 ) {
                  await CotaParlamentar.insertMany(buffer);
                  buffer = [];
                  counter = 0;
                  resolve(true);
                }
              } catch(e) {
                stream.destroy(e);
              }
            });
    
        });
    
    
      } catch(e) {
        console.error(e)
      } finally {
        process.exit()
      }
}


async getData(req: Request, res: Response): Promise<Response> {
    
    try {
        const result = await CotaParlamentar.find();
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
        const result = await CotaParlamentar.find().skip(startIndex).limit(limit);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

async getDataFiltered(req: Request, res: Response, query: object): Promise<Response> {
    try {      

        const result = await CotaParlamentar.find(query);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

async deleteAll(req: Request, res: Response): Promise<Response> {
    try {      

        const result = await CotaParlamentar.remove();
        return res.status(200).json("Banco deletado com sucesso");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


}
