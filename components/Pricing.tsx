import { useTranslations } from "next-intl";
import { SectionHeading } from "./SectionHeading";

type Row = readonly [string, string];

function PriceRows({
  rows,
  label,
  price,
}: {
  rows: readonly Row[];
  label: (k: string) => string;
  price: (k: string) => string;
}) {
  return (
    <>
      {rows.map(([labelKey, priceKey]) => (
        <div key={labelKey} className="pricing-row">
          <dt>{label(labelKey)}</dt>
          <dd>{price(priceKey)}</dd>
        </div>
      ))}
    </>
  );
}

function PriceBlock({
  title,
  rows,
  label,
  price,
}: {
  title: string;
  rows: readonly Row[];
  label: (k: string) => string;
  price: (k: string) => string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow)]">
      <p className="pricing-group-title">{title}</p>
      <dl>
        <PriceRows rows={rows} label={label} price={price} />
      </dl>
    </div>
  );
}

function WaxPriceBlock({
  title,
  columns,
  label,
  price,
}: {
  title: string;
  columns: readonly (readonly Row[])[];
  label: (k: string) => string;
  price: (k: string) => string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow)]">
      <p className="pricing-group-title">{title}</p>
      <div className="pricing-wax-grid">
        {columns.map((rows, index) => (
          <dl key={index} className="pricing-wax-col">
            <PriceRows rows={rows} label={label} price={price} />
          </dl>
        ))}
      </div>
    </div>
  );
}

const hairRows: readonly Row[] = [
  ["cut", "cutPrice"],
  ["color", "colorPrice"],
];

const nailsRows: readonly Row[] = [
  ["nails", "nailsPrice"],
  ["gel", "gelPrice"],
];

const waxColumns: readonly (readonly Row[])[] = [
  [
    ["brows", "browsPrice"],
    ["face", "facePrice"],
    ["mustache", "mustachePrice"],
    ["underarms", "underarmsPrice"],
    ["armsElbow", "armsElbowPrice"],
    ["armsShoulder", "armsShoulderPrice"],
  ],
  [
    ["legsKnee", "legsKneePrice"],
    ["legsFull", "legsFullPrice"],
    ["stomach", "stomachPrice"],
    ["glutes", "glutesPrice"],
    ["bikiniMedium", "bikiniMediumPrice"],
    ["bikiniDeep", "bikiniDeepPrice"],
  ],
];

export function Pricing() {
  const t = useTranslations("pricing");
  const L = (k: string) => t(`items.${k}` as "items.nails");
  const P = (k: string) => t(`items.${k}` as "items.nailsPrice");

  return (
    <section id="pricing" className="section section-alt">
      <div className="wrap-wide flex flex-col gap-8">
        <SectionHeading title={t("title")} description={t("intro")} align="center" />

        <div className="flex flex-col gap-6">
          <div className="grid items-start gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <PriceBlock
                title={t("groups.hair")}
                rows={hairRows}
                label={L}
                price={P}
              />
              <p className="px-1 text-xs leading-relaxed text-muted">{t("note")}</p>
            </div>
            <PriceBlock
              title={t("groups.nails")}
              rows={nailsRows}
              label={L}
              price={P}
            />
          </div>

          <WaxPriceBlock
            title={t("groups.waxing")}
            columns={waxColumns}
            label={L}
            price={P}
          />
        </div>
      </div>
    </section>
  );
}
