import React, { useEffect, useRef } from 'react';

/** Pexels — mulher fazendo afundos com halteres na academia (royalty-free) */
const VIDEO_URL = '/hero-treino.mp4';

export const HeroVideo = () => {
  const videoRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    const tick = () => {
      if (!video) return;
      const { currentTime, duration, paused } = video;
      if (!paused && duration && !Number.isNaN(duration)) {
        let opacity = 1;
        if (currentTime < 0.5) opacity = currentTime / 0.5;
        else if (currentTime > duration - 0.5) opacity = Math.max(0, (duration - currentTime) / 0.5);
        video.style.opacity = String(opacity);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onEnded = async () => {
      video.style.opacity = '0';
      await new Promise((r) => setTimeout(r, 100));
      try {
        video.currentTime = 0;
        await video.play();
      } catch (_) { /* autoplay */ }
    };

    video.addEventListener('ended', onEnded);
    rafRef.current = requestAnimationFrame(tick);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('ended', onEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: '#0a0a0a'
      }}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        autoPlay
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0
        }}
      />
      {/* Escurece o vídeo para o texto branco ficar legível */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.72) 100%)'
        }}
      />
    </div>
  );
};
