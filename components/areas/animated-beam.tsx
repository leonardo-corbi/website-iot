"use client";

import React, { forwardRef, useRef } from "react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BiWorld } from "react-icons/bi";
import { SlChemistry } from "react-icons/sl";
import { BiMath } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
import { FaVolleyball } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";

import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:p-8 p-4 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[250px] items-stretch justify-between gap-2">
        <div className="flex flex-row items-center justify-between text-black">
          <Circle ref={div1Ref}>
            <Icons.art />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.chemistry />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.fisicEducation />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <p className="font-semibold text-black sm:text-lg text-md">LC</p>
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.geography />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.portuguese />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.math />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  geography: () => <BiWorld className="text-black" />,
  chemistry: () => <SlChemistry className="text-black" />,
  math: () => <BiMath className="text-black" />,
  portuguese: () => <FaPencilAlt className="text-black" />,
  art: () => <FaPaintBrush className="text-black" />,
  fisicEducation: () => <FaVolleyball className="text-black" />,
};
