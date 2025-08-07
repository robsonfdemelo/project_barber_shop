import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./button"
import { QuickSearchOption } from "@/app/_constants/search"
import { Avatar, AvatarImage } from "./avatar"

const Header = () => (
  <Card>
    <CardContent className="flex flex-row items-center justify-between p-5">
      <Link href="/">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex items-center gap-3 border-b border-solid py-5">
            <Avatar>
              <AvatarImage src="/avatar_perfil.jpg" />
            </Avatar>

            <div>
              <p className="font-bold">Robson Ferreira de Melo</p>
              <p className="text-xs">robson.ferreiramelo@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-b border-solid py-5">
            <SheetClose asChild>
              <Button variant="ghost" className="justify-start gap-2" asChild>
                <Link href="/">
                  <HomeIcon size={18} />
                  Início
                </Link>
              </Button>
            </SheetClose>
            <Button variant="ghost" className="justify-start gap-2">
              <CalendarIcon size={18} />
              Agendamentos
            </Button>
          </div>
          <div className="flex flex-col gap-2 border-b border-solid py-5">
            {QuickSearchOption.map((option) => (
              <Button
                key={option.title}
                variant="ghost"
                className="justify-start gap-2"
              >
                <Image
                  src={option.imageUrl}
                  height={18}
                  width={18}
                  alt={option.title}
                />
                {option.title}
              </Button>
            ))}
          </div>

          <div className="flex flex-col gap-2 py-5">
            <Button variant="ghost" className="justify-start gap-2">
              <LogOutIcon size={18} />
              Sair da Conta
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </CardContent>
  </Card>
)

export default Header
