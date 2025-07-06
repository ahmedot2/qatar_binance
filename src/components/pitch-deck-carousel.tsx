"use client"

import * as React from "react"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slideImages = [
  "/slides/slide-1.png?v=2",
  "/slides/slide-2.png?v=2",
  "/slides/slide-3.png?v=2",
  "/slides/slide-4.png?v=2",
  "/slides/slide-5.png?v=2",
  "/slides/slide-6.png?v=2",
  "/slides/slide-7.png?v=2",
  "/slides/slide-8.png?v=2",
  "/slides/slide-9.png?v=2",
  "/slides/slide-10.png?v=2",
  "/slides/slide-11.png?v=2",
  "/slides/slide-12.png?v=2",
  "/slides/slide-13.png?v=2",
  "/slides/slide-14.png?v=2",
  "/slides/slide-15.png?v=2",
  "/slides/slide-16.png?v=2",
  "/slides/slide-17.png?v=2",
];

export function PitchDeckCarousel() {
  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {slideImages.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl">
                <Image 
                  src={src} 
                  alt={`Slide ${index + 1}`} 
                  width={1280} 
                  height={720} 
                  className="w-full h-full object-cover"
                  data-ai-hint="presentation slide" 
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
    </Carousel>
  )
}
