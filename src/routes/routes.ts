import {Router} from "express"
import CursoController  from "../controllers/controllerCurso"
import UnidadeController  from "../controllers/controllerUnidade"
import TurmaController  from "../controllers/controllerTurma"

const rotas = Router ()

rotas.get ("/", (request, response)=>{
    return response.json("Home Page")
})

rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos/:id", new CursoController().readOne)
rotas.put("/cursos/:id", new CursoController().update)
rotas.delete("/cursos/:id", new CursoController().delete)


rotas.post("/unidade", new UnidadeController().create)
rotas.get("/unidade", new UnidadeController().readAll)
rotas.get("/unidade/:id", new UnidadeController().readOne)
rotas.put("/unidade/:id", new UnidadeController().update)
rotas.delete("/unidade/:id", new UnidadeController().delete)

rotas.post("/turmas", new TurmaController().create)
rotas.get("/turmas", new TurmaController().readAll)
rotas.get("/turmas/:id", new TurmaController().readOne)
rotas.put("/turmas/:id", new TurmaController().update)
rotas.delete("/cturmas/:id", new TurmaController().delete)

export default rotas