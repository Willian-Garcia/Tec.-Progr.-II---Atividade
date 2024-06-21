import { Router } from "express";
import cidade from "./cidade";
import estado from "./estado";
import user from "./user";
import aoi from "./aoi";

const router = Router();

router.use("/cidade", cidade);
router.use("/estado", estado);
router.use("/usuario", user);
router.use("/aoi", aoi);

export default router;