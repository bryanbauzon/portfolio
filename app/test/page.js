'use client'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import React from "react";
export default function Test() {
  return (
    <>
     <Card isFooterBlurred className="w-[20vw] h-[300px] col-span-12 sm:col-span-7">
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/projects/anda.png"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Discover Anda, Pangasinan</p>
            <p className="text-tiny text-white/60">Little Boracay of the North</p>
          </div>
        </div>
        <Button radius="full" size="sm">Watch</Button>
      </CardFooter>
    </Card>
    </>
  );
}
