import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 md:max-w-[50%]">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Merhaba, Benim Adım <span className="text-primary">Ali</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Modern web uygulamaları geliştirmeye tutkulu yeni bir mezun. Uzmanlık alanım React, Next.js ve Tailwind CSS ile Front End Developer.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact">
                  İletişime Geç <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
             
            </div>
            <div className="mt-4 flex gap-4">
              <Link href="https://github.com/Aliokey12" target="_blank" rel="noreferrer">
                <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/ali-esmerer-239067271/" target="_blank" rel="noreferrer">
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:aliokey12@gmail.com">
                <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src="/aliPortfolio.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container py-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Öne Çıkan Projeler
            </h2>
            <p className="text-muted-foreground">
              Son çalışmalarım.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={`/image.png`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Project {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    A brief description of this project and the technologies used.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link target="_blank" href={`https://form-builder-nine-lyart.vercel.app/builder`}>
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Beceriler & Teknolojiler
              </h2>
              <p className="text-muted-foreground">
                Kullandığım araçlar ve teknolojiler.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "HTML",
                "CSS",
                "Git",
                "UI/UX Design",
                "Responsive Design",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-center rounded-md border bg-card p-4 text-center"
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="container py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Hakkımda
            </h2>
            <p className="text-muted-foreground">
              Web geliştirme ve tasarıma tutkulu yeni bir mezunum. Güzel, işlevsel ve kullanıcı dostu web siteleri ve uygulamalar oluşturmayı seviyorum.
            </p>
            <p className="text-muted-foreground">
              Kod yazmadığım zamanlarda yeni teknolojileri keşfederken, kitap okurken veya açık hava etkinliklerinin tadını çıkarırken bulabilirsiniz.
            </p>
            <Button variant="outline" className="w-fit" asChild>
              <Link href="/about">Hakkımda Daha Fazla Bilgi Al</Link>
            </Button>
          </div>
          <div className="relative mt-6 h-[300px] w-full overflow-hidden rounded-lg md:mt-0 md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              alt="Working on code"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Birlikte Çalışalım
            </h2>
            <p className="max-w-[600px] text-primary-foreground/90">
              Şu anda serbest çalışma ve iş fırsatları için uygunum. Birlikte çalışmakla ilgileniyorsanız, benimle iletişime geçmekten çekinmeyin!
            </p>
            <Button variant="secondary" asChild>
              <Link href="/contact">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}