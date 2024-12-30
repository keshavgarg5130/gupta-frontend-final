"use client"

import * as React from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ComparisonSliderProps extends React.HTMLAttributes<HTMLDivElement> {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
}

export function ComparisonSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    className,
    ...props
}: ComparisonSliderProps) {
    const [isResizing, setIsResizing] = useState(false)
    const [position, setPosition] = useState(50)
    const rangeRef = useRef<HTMLDivElement>(null)

    const updatePosition = useCallback(
        (event: MouseEvent | TouchEvent) => {
            if (!rangeRef.current) return

            const rect = rangeRef.current.getBoundingClientRect()
            const x = "touches" in event ? event.touches[0].clientX : event.clientX
            const position = ((x - rect.left) / rect.width) * 100

            setPosition(Math.min(Math.max(position, 0), 100))
        },
        []
    )

    const handleMove = useCallback(
        (event: MouseEvent | TouchEvent) => {
            if (!isResizing) return
            updatePosition(event)
        },
        [isResizing, updatePosition]
    )

    const handleLeave = useCallback(() => {
        setIsResizing(false)
    }, [])

    useEffect(() => {
        document.addEventListener("mousemove", handleMove)
        document.addEventListener("mouseup", handleLeave)
        document.addEventListener("touchmove", handleMove)
        document.addEventListener("touchend", handleLeave)

        return () => {
            document.removeEventListener("mousemove", handleMove)
            document.removeEventListener("mouseup", handleLeave)
            document.removeEventListener("touchmove", handleMove)
            document.removeEventListener("touchend", handleLeave)
        }
    }, [handleMove, handleLeave])

    return (
        <div className="flex justify-center">
            <div
                ref={rangeRef}
                className={cn(
                    "relative h-[240px] w-11/12 md:h-[600px] lg:h-[860px] select-none overflow-hidden rounded-lg",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 w-full">
                    <img
                        src={afterImage}
                        alt="After"
                        className="h-full w-full "
                    />
                </div>
                <div
                    className="absolute inset-0 w-full"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                >
                    <img
                        src={beforeImage}
                        alt="Before"
                        className="h-full w-full "
                    />
                </div>
                <div
                    className="absolute inset-y-0 cursor-ew-resize"
                    style={{ left: `calc(${position}% - 2px)` }}
                    onMouseDown={() => setIsResizing(true)}
                    onTouchStart={() => setIsResizing(true)}
                >
                    <div className="relative h-full w-1 bg-white">
                        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/25 backdrop-blur-sm">
                            <div className="flex h-full items-center justify-center gap-0.5">
                                <div className="h-4 w-0.5 bg-white" />
                                <div className="h-4 w-0.5 bg-white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none absolute inset-0 flex">
                    <div
                        className="relative w-full"
                        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                    >
                    </div>
                    <div className="relative flex-1">
                    </div>
                </div>
            </div>
        </div>
    )
}

