import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="flex flex-col items-center justify-between px-5 py-6 md:flex-row">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-400 md:mb-0">
            <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
            <Image
              src="/logo_CodeForSolutions.png"
              alt="Logo CodeForPeople"
              width={20}
              height={20}
              className="inline-block"
            />
            <span className="font-bold">CodeForPeople</span>
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
