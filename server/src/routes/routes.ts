import { Request, Response, Router } from 'express';
import TesteController from '../controller/teste';

const router = Router();
const testeController = new TesteController();


router.post("/teste",(req: Request, res: Response) => {
    testeController.downloadCsv(req,res);
});

router.get("/testeGetAll",(req: Request, res: Response) => {
    testeController.getData(req,res);
});
router.get("/testeGetAllPageable",(req: Request, res: Response) => {
    testeController.getDataPageable(req,res);
});
router.get("/testeGetFiltered",(req: Request, res: Response) => {
    testeController.getDataFiltered(req,res,req.query);
});
router.delete("/delete",(req: Request, res: Response) => {
    testeController.deleteAll(req,res);
});

export default router;