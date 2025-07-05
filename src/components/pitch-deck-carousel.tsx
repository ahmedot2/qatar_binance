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
import { Card, CardContent } from "@/components/ui/card"

const slideImages = [
  "/slides/slide-1.png",
  "/slides/slide-2.png",
  "/slides/slide-3.png",
  "/slides/slide-4.png",
  "/slides/slide-5.png",
  "/slides/slide-6.png",
  "/slides/slide-7.png",
  "/slides/slide-8.png",
  "/slides/slide-9.png",
  "/slides/slide-10.png",
];

export function PitchDeckCarousel() {
  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {slideImages.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden">
                <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                  <Image 
                    src={src} 
                    alt={`Slide ${index + 1}`} 
                    width={1280} 
                    height={720} 
                    className="w-full h-full object-cover"
                    data-ai-hint="presentation slide" 
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
    </Carousel>
  )
}
