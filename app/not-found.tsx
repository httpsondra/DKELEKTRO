import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="grid min-h-[70vh] place-items-center px-6 pt-24">
        <div className="text-center">
          <p className="eyebrow justify-center">Chyba 404</p>
          <h1 className="display mt-6 text-[clamp(2.2rem,1.6rem+3vw,3.6rem)]">
            Tudy cesta nevede.
          </h1>
          <p className="lead mx-auto mt-5">
            Stránku se nepodařilo najít. Možná byla přesunuta nebo už neexistuje.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              Zpět na úvod
              <Icon name="arrow" size={17} />
            </Link>
            <Link href="/#kontakt" className="btn btn-secondary">
              Kontaktovat nás
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
