
import { site } from "../data/site.config";
import { CornerMandala, FallingPetals } from "./Florals";

export function Hero() {
  const { couple, displayDate, city, hero } = site;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 pb-28 pt-16 text-center"
    >
      <FallingPetals />

      <CornerMandala className="pointer-events-none absolute left-0 top-0 w-36 max-w-[42vw] md:w-56" />
      <CornerMandala className="pointer-events-none absolute right-0 top-0 w-36 max-w-[42vw] origin-center scale-x-[-1] md:w-56" />
      <CornerMandala className="pointer-events-none absolute bottom-16 left-0 w-28 max-w-[36vw] origin-center scale-y-[-1] md:w-44" />
      <CornerMandala className="pointer-events-none absolute bottom-16 right-0 w-28 max-w-[36vw] origin-center scale-[-1] md:w-44" />

      {/* Ganesh Mantra */}
      <p className="relative font-display text-base tracking-wide text-accent-deep md:text-lg">
        {hero.kicker}
      </p>

      {/* Groom's Parents */}
      <p className="relative mt-5 max-w-2xl font-display text-sm leading-relaxed text-ink md:text-base">
        {hero.parentsLine}
      </p>

      {/* Invitation Wording */}
      <p className="relative mt-3 max-w-xl font-display text-sm leading-relaxed text-muted md:text-base">
        {hero.invitationText}
      </p>

      {/* Couple Names - Original Cursive Font Preserved */}
      <h1 className="relative mt-5 font-script text-6xl leading-tight text-accent-deep sm:text-7xl md:text-8xl">
        {couple.partnerA}
        <span className="mx-2 text-gold">&</span>
        {couple.partnerB}
      </h1>

      {/* Bride's Parents */}
      <p className="relative mt-3 max-w-2xl font-display text-xs leading-relaxed text-muted sm:text-sm md:text-base">
        {hero.brideParentsLine}
      </p>

      {/* Wedding Date */}
      <p className="relative mt-7 font-display text-xl text-ink md:text-2xl">
        {displayDate}
      </p>

      {/* Wedding Location */}
      <p className="relative mt-1 font-display text-lg text-muted">
        {city}
      </p>

      {/* Invitation Button */}
      <a
        href={hero.ctaHref}
        className="relative mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-accent-deep px-7 py-3 text-sm font-medium tracking-wide text-page shadow-md"
      >
        {hero.ctaLabel}
      </a>
    </section>
  );
}
