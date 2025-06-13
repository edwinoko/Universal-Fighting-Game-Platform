"use client"
import * as React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

// A slider showing added articles, Interesting videos, current league Top 3 ranking, Upcoming tournaments 
const EventSlider = () => { 
    return (
      <div className="w-full flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full max-w-3xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-8">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
}

export default EventSlider