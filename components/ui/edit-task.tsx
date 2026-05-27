import { SquarePen } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Button, Input } from "@base-ui/react"

const EditTask = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <SquarePen size={16} className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Tarefa</DialogTitle>
                </DialogHeader>

                <div className="flex gap-2">
                    <Input placeholder="Editar tarefa" />
                    <Button className="cursor-pointer">Editar</Button>
                </div>

            </DialogContent>
        </Dialog>
    )
}

export default EditTask