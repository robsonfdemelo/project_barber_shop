import Image from "next/image"
import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="flex items-center gap-2 text-sm text-gray-400">
            © 2025 Copyright
            <Image
              src="/logo_CodeForSolutions.png"
              alt="Logo CodeForPeople"
              width={20}
              height={20}
              className="inline-block"
            />
            <span className="font-bold">CodeForPeople</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
