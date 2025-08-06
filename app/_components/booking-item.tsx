import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"

//TODO - Receber agendamento com prop.
const BookingItem = () => {
  return (
    <>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
      <Card>
        <CardContent className="flex justify-between p-0">
          {/* Esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6 overflow-hidden">
                <AvatarImage
                  src="/avatar.png"
                  alt="Foto da barbearia"
                  className="object-cover"
                />
              </Avatar>
              <p className="text-sm">Barbearia FSW</p>
            </div>
          </div>

          {/* Direita */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">20:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
