import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, X } from 'lucide-react'
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
          <Separator />
          <div className="flex gap-2">
            <Badge className="cursor-pointer"><List />Todas</Badge>
            <Badge className="cursor-pointer"><X />Nao finalizadas</Badge>
            <Badge className="cursor-pointer"><Check />Concluidas</Badge>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default Home