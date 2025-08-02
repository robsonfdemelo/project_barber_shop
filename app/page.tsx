import Image from "next/image"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import Header from "./_components/ui/header"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Robinho!</h2>
        <p>Sábado, 02 de Agosto de 2025</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça Sua Busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Home
