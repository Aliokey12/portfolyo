import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Hakkımda
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Beni ve web geliştirme yolculuğumu tanıyın.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Hikayem</h2>
            <p>
              Merhaba! Ben Ali, Isparta Uygulamalı Bilimler Üniversitesin’den Bilişimi Güvenliği mezunuyum. Web geliştirme yolculuğum Lisemin dördüncü yılında ilk web sitemi yaptığımda başladı.
            </p>
            <p>
              Akademik kariyerim boyunca, ön yüz geliştirme becerilerimi geliştirmeye odaklandım ve özellikle sezgisel ve erişilebilir kullanıcı arayüzleri oluşturma konusunda ilgi duydum.
            </p>
            <p>
              Yeni bir mezun olacak biri olarak, becerilerimi ve bilgimi profesyonel bir ortamda uygulamaktan heyecan duyuyorum ve bir geliştirici olarak büyümeye devam etmek istiyorum.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Working on laptop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Eğitim</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Lisans Diploması</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Isparta Uygulamalı Bilimler Üniversitesi</p>
                <p className="text-sm text-muted-foreground">Bilişimi Güvenliği</p>
                <p className="text-sm text-muted-foreground">2023 - 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>İlgili Dersler</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Web Development</li>
                  <li>User Interface Design</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Software Engineering</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">İlgi Alanlarım</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Web Geliştirme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Modern teknolojilerle duyarlı ve erişilebilir web siteleri inşa etmek.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>UI/UX Tasarımı</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sezgisel ve görsel olarak çekici kullanıcı deneyimleri oluşturmak.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Açık Kaynak</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Açık kaynak projelerine katkıda bulunmak ve topluluktan öğrenmek.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Kişisel Değerler</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Sürekli Öğrenme</h3>
              <p className="text-muted-foreground">
                Sürekli olarak becerilerimi geliştirmeye ve en son teknolojilerle güncel kalmaya inanıyorum.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Detaylara Dikkat</h3>
              <p className="text-muted-foreground">
                Kullanıcı deneyiminde büyük fark yaratan küçük detaylara dikkat ederim.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Problem Çözme</h3>
              <p className="text-muted-foreground">
                Karmaşık problemleri çözmeyi ve şık çözümler bulmayı severim.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">İşbirliği</h3>
              <p className="text-muted-foreground">
                Başkalarıyla çalışmayı değerli buluyorum ve farklı bakış açıların daha iyi sonuçlar doğurduğuna inanıyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}