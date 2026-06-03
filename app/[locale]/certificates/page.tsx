import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header";
import { CertificatesGallery } from "@/components/CertificatesGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "certificates" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function CertificatesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("certificates");

  return (
    <div className="certificates-page" id="top">
      <Header />
      <main className="certificates-main section section-alt">
        <div className="certificates-layout wrap-wide">
          <Link href="/" className="link w-fit shrink-0 text-sm">
            ← {t("back")}
          </Link>
          <SectionHeading title={t("title")} description={t("intro")} />
          <div className="certificates-gallery-wrap min-h-0 flex-1">
            <CertificatesGallery className="certificates-gallery" />
          </div>
          <a href="#top" className="link back-to-top w-fit shrink-0 text-sm lg:hidden">
            ↑ {t("backToTop")}
          </a>
        </div>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
