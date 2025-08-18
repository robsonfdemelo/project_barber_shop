import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "./button"
import SideBarSheet from "../sidebar-sheet"
import Link from "next/link"

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
        <SideBarSheet />
      </Sheet>
    </CardContent>
  </Card>
)

export default Header
