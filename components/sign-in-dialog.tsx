import {
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog"
import { Button } from "./ui/button"
import { DialogHeader } from "./ui/dialog"
import { signIn } from "next-auth/react"
import Image from "next/image"

interface SignInDialogProps {
  onSuccess?: () => void
}

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google.
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          alt="Fazer login com o Google"
          src="/google.svg"
          width={18}
          height={18}
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
