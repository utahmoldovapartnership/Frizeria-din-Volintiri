import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { BookCta } from "@/components/BookCta";
import { ContactFooter } from "@/components/ContactFooter";
import { LazyReveal } from "@/components/LazyReveal";
import { routing } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <LazyReveal>
          <Services />
        </LazyReveal>
        <LazyReveal>
          <Pricing />
        </LazyReveal>
        <LazyReveal>
          <About />
        </LazyReveal>
        <LazyReveal>
          <Gallery />
        </LazyReveal>
        <LazyReveal>
          <FAQ />
        </LazyReveal>
      </main>
      <LazyReveal>
        <BookCta />
      </LazyReveal>
      <LazyReveal>
        <ContactFooter />
      </LazyReveal>
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
