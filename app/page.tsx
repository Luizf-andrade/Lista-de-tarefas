import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, X, Trash, ListCheck, Sigma } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import EditTask from "@/components/ui/edit-task"


const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <Card className="w-lg p-5">
        <CardHeader className="flex gap-2">
          <input className="w-[289] p-2" placeholder="Adicionar Tarefa" />
          <Button className="ml-auto cursor-pointer"><Plus />Cadastrar</Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4" />

          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant="default"><List />Todas</Badge>
            <Badge className="cursor-pointer" variant="outline"><X />Nao finalizadas</Badge>
            <Badge className="cursor-pointer" variant="outline"><Check />Concluidas</Badge>
          </div>

          <div className="mt-4 py-2 border-b-white">

            <div className="h-14 flex justify-between items-center border-t-white">
              <div className="w-2 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">

                <EditTask />

                <Trash size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2">
              <ListCheck size={15} />
              <p className="text-xs">Tarefas Concluidas (3/3)</p>
            </div>

            <AlertDialog>
              <AlertDialogTrigger>
                <Button className="text-xs h-7 cursor-pointer" variant="outline"><Trash />Limpar Tarefas Concluidas</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Tem certeza que deseja excluir x itens?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Sim</AlertDialogAction>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </div>

          <div className="h-2 w-full bg-gray-500 mt-4 rounded-md">
            <div className="h-full bg-blue-500 rounded-md" style={{ width: "50%" }}></div>
          </div>

          <div className="flex justify-end items-center mt-2 gap-2">
            <Sigma size={18} />
            <p className="text-xs">3 tarefas no total</p>
          </div>
        </CardContent>

        <div></div>

      </Card>
    </main >
  )
}

export default Home