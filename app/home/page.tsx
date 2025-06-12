import EventSlider from "@/components/EventSlider";
import Intro from "@/components/Intro";

// Example character images (place your PNGs in /public/characters/)
const characters = [
  "/characters/mario.png",
  "/characters/link.png",
  "/characters/samus.png",
  "/characters/pikachu.png",
  "/characters/kirby.png",
];

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* Background character images */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {characters.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute opacity-10 select-none
              ${i === 0 ? "left-4 top-10 w-40 rotate-[-10deg]" : ""}
              ${i === 1 ? "right-8 top-24 w-36 rotate-12" : ""}
              ${i === 2 ? "left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2" : ""}
              ${i === 3 ? "left-10 bottom-10 w-32 rotate-6" : ""}
              ${i === 4 ? "right-10 bottom-16 w-32 -rotate-6" : ""}
            `}
            draggable={false}
          />
        ))}
      </div>
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Universal Fighting Game Platform</h1>
        <p className="mb-6 max-w-2xl text-center text-lg">
          Dive into the world of competitive fighting games! This platform is dedicated to providing frame data, character guides, and event information for Super Smash Bros. and other popular fighting games. Whether you're a seasoned pro or just starting out, you'll find resources to help you improve your gameplay and connect with the community.
        </p>
        <EventSlider />
        <section className="mt-8 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-2">About Super Smash Bros.</h2>
          <p>
            Super Smash Bros. is a crossover fighting game series featuring characters from various Nintendo franchises and beyond. Known for its fast-paced action, unique mechanics, and vibrant community, Smash Bros. has become a staple in both casual and competitive gaming scenes. Explore character frame data, learn advanced techniques, and stay up to date with the latest tournaments right here!
          </p>
        </section>
      </div>
    </main>
  )
}