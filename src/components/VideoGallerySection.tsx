import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const videos = [
  {
    id: "egypt",
    title: "Ancient Egypt",
    subtitle: "Reign of Cleopatra",
    year: "48 BCE",
    // FICHIER: public/video/egypt.mp4
    src: "/videos/egypt.mp4",
  },
  {
    id: "japan",
    title: "Feudal Japan",
    subtitle: "The Edo Period",
    year: "c. 1650",
    // FICHIER: public/video/japan.mp4
    src: "/videos/japan.mp4",
  },
  {
    id: "newyork",
    title: "New York 1920",
    subtitle: "The Roaring Twenties",
    year: "1920",
    // FICHIER: public/video/newyork.mp4
    src: "/videos/newyork.mp4",
  },
];

export function VideoGallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setIsPlaying(false);
    setProgress(0);
    video.load();
  }, [activeVideo]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    video.currentTime = pct * video.duration;
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const current = videos[activeVideo];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-card/20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div data-animate className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs tracking-widest uppercase text-primary">
            Gallery
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Glimpses Through <span className="gold-gradient">Time</span>
          </h2>
          <p className="mt-6 font-mono text-base leading-relaxed text-muted-foreground">
            Preview the sights and atmospheres that await you. Captured through
            our temporal observation lenses.
          </p>
        </div>

        <div className="mt-16 md:mt-20 flex flex-col gap-6">
          {/* Main Video Player */}
          <div
            data-animate
            className="relative w-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 opacity-0"
            style={{ animationDelay: "150ms" }}
          >
            <div className="relative aspect-video w-full cursor-pointer" onClick={togglePlay}>
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                muted={isMuted}
                playsInline
                loop
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={current.src} type="video/mp4" />
              </video>

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-background/60 backdrop-blur-md transition-transform duration-300 hover:scale-110">
                    <Play className="ml-1 h-8 w-8 text-primary" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full border border-primary/30 bg-background/60 px-3 py-1 font-mono text-xs tracking-wider text-primary backdrop-blur-sm">
                      {current.year}
                    </span>
                    <h3 className="mt-3 font-sans text-2xl font-bold text-foreground md:text-3xl text-shadow-lg">
                      {current.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs tracking-wider uppercase text-primary/80">
                      {current.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/60 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background/80"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4 text-foreground" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-foreground" />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFullscreen();
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/60 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background/80"
                      aria-label="Fullscreen"
                    >
                      <Maximize className="h-4 w-4 text-foreground" />
                    </button>
                  </div>
                </div>

                <div
                  className="mt-4 h-1 w-full cursor-pointer overflow-hidden rounded-full bg-border/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProgressClick(e);
                  }}
                >
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-150 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Selector */}
          <div
            data-animate
            className="grid grid-cols-3 gap-3 md:gap-6 opacity-0"
            style={{ animationDelay: "300ms" }}
          >
            {videos.map((video, i) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(i)}
                className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
                  activeVideo === i
                    ? "border-primary/60 shadow-[0_0_30px_-10px_rgba(201,168,76,0.3)]"
                    : "border-border/30 hover:border-border/60"
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <video
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    muted
                    playsInline
                    preload="metadata"
                  >
                    {/* On peut garder le #t=0.5 pour prévisualiser à 0.5s */}
                    <source src={`${video.src}#t=0.5`} type="video/mp4" />
                  </video>
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      activeVideo === i
                        ? "bg-primary/5"
                        : "bg-background/40 group-hover:bg-background/20"
                    }`}
                  />

                  {activeVideo === i && (
                    <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(201,168,76,0.5)]" />
                  )}

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3 md:p-4">
                    <p className="font-sans text-xs font-semibold text-foreground md:text-sm">
                      {video.title}
                    </p>
                    <p className="font-mono text-[10px] tracking-wider text-muted-foreground md:text-xs">
                      {video.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
