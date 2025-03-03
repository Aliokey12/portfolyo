import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Portföyüm. Tüm hakları saklıdır.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/Aliokey12" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/ali-esmerer-239067271/" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:aliokey12@gmail.com">
              <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}