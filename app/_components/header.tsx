import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"
import Link from "next/link"

const Header = () => (
  <Card>
    <CardContent className="flex items-center justify-between p-5">
      <Link href="/" className="rounded p-1">
        <Image
          alt="Barber Shop"
          src="/logo_new.png"
          width={300} // pode manter grande; é o tamanho “intrínseco”
          height={300}
          // responsivo: muda o tamanho “preferido” por breakpoint
          sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
          priority
          className="lg:h-30 h-36 w-auto md:h-40" // ~64px / 80px / 96px de altura
        />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            aria-label="Abrir menu"
            className="md:hidden"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SidebarSheet />
      </Sheet>
    </CardContent>
  </Card>
)

export default Header
