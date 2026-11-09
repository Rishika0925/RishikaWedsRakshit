
import { useRef, useState, useEffect } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { music } = site;

  // Automatically attempt to play music when website opens
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    audio.play().then(
      () => setPlaying(true),
      () => setPlaying(false)
    );
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(
        () => setPlaying(true),
        () => setPlaying(false)
      );
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-24 z-40">
      <audio
        ref={audioRef}
        src={asset(music.src)}
        preload="auto"
        loop
      />

      <button
        type="button"
        onClick={toggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-page text-accent-deep shadow-md"
        aria-pressed={playing}
        aria-label={playing ? music.labelPause : music.labelPlay}
      >
        <Icon name={playing ? "pause" : "music"} />
      </button>
    </div>
  );
}
