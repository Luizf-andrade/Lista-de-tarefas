import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, X, SquarePen, Trash, ListCheck } from 'lucide-react'
import { Badge } from "@/components/ui/badge"



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
                <SquarePen size={16} className="cursor-pointer" />
                <Trash size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2">
              <ListCheck size={15} />
              <p className="text-xs">Tarefas Concluidas (3/3)</p>
            </div>
            <Button className="text-xs h-7 cursor-pointer" variant="outline"><Trash />Limpar Tarefas Concluidas</Button>
          </div>

          <div className="h-8 w-full bg-gray-500">
            <div className="h-2 w-52 bg-blue-500"></div>
          </div>
        </CardContent>

        <div></div>

      </Card>
    </main>
  )
}

export default Home