
import { lazy, Suspense, useCallback, useState } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";

const Lightbox = lazy(() => import("./Lightbox"));

function Row({ photos, reverse, onOpen }) {
  const loop = [...photos, ...photos];
  const trackClass = reverse ? "marquee-track-reverse" : "marquee-track";

  return (
    <div className="marquee overflow-hidden">
      <div className={`flex w-max items-center gap-4 ${trackClass}`}>
        {loop.map((photo, index) => (
          <button
            key={`${photo.src}-${index}`}
            type="button"
            className="flex h-56 w-56 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-page sm:h-64 sm:w-64"
            onClick={() => onOpen(photo)}
            aria-label={`View ${photo.alt}`}
          >
            <img
              src={asset(photo.src)}
              alt={photo.alt}
              width={1600}
              height={1600}
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const photos = site.gallery.photos;
  const midpoint = Math.ceil(photos.length / 2);
  const rowA = photos.slice(0, midpoint);
  const rowB = photos.slice(midpoint);

  const [active, setActive] = useState(null);

  const onOpen = (photo) => {
    setActive(photos.findIndex((item) => item.src === photo.src));
  };

  const onClose = useCallback(() => setActive(null), []);

  const onPrev = useCallback(
    () => setActive(
      (current) => (current + photos.length - 1) % photos.length
    ),
    [photos.length]
  );

  const onNext = useCallback(
    () => setActive(
      (current) => (current + 1) % photos.length
    ),
    [photos.length]
  );

  return (
    <section id="gallery" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-display text-sm tracking-[0.28em] text-gold uppercase">
          {site.gallery.eyebrow}
        </p>

        <h2 className="mt-3 text-center font-display text-4xl font-semibold md:text-5xl">
          {site.gallery.heading}
        </h2>

        <div className="mt-10 space-y-5">
          <Row photos={rowA} onOpen={onOpen} />
          <Row photos={rowB} reverse onOpen={onOpen} />
        </div>
      </div>

      {active !== null && (
        <Suspense fallback={null}>
          <Lightbox
            photos={photos}
            index={active}
            onClose={onClose}
            onPrev={onPrev}
            onNext={onNext}
          />
        </Suspense>
      )}
    </section>
  );
}
