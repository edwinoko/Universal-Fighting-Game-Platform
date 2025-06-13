import EventSlider from "@/components/EventSlider";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 md:py-20 overflow-hidden">
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-8 text-center">Welcome to the Universal Fighting Game Platform</h1>
        <p className="mb-12 max-w-3xl text-center text-lg md:text-xl">
          Dive into the world of competitive fighting games! This platform is dedicated to providing frame data, character guides, and event information for Super Smash Bros. and other popular fighting games. Whether you're a seasoned pro or just starting out, you'll find resources to help you improve your gameplay and connect with the community.
        </p>
        <div className="w-full mb-12">
          <EventSlider />
        </div>
        <section className="mt-8 max-w-3xl text-center bg-white/80 rounded-lg shadow p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Super Smash Bros.</h2>
          <p className="text-base md:text-lg">
            Super Smash Bros. is a crossover fighting game series featuring characters from various Nintendo franchises and beyond. Known for its fast-paced action, unique mechanics, and vibrant community, Smash Bros. has become a staple in both casual and competitive gaming scenes. Explore character frame data, learn advanced techniques, and stay up to date with the latest tournaments right here!
          </p>
        </section>
      </div>
    </main>
  )
}