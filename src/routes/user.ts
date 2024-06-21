import { Router } from "express";
import controller from "../controllers/UserController";

const router = Router();

router.get("/", controller.list);
router.post("/", controller.create);
router.delete("/", controller.delete);
router.put("/updatemail", controller.updatemail);
router.put("/updatenome", controller.updatenome);
router.put("/updatetelefone", controller.updatetelefone);

export default router;