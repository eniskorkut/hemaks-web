"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
    title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // If no images are provided, return null or a placeholder
    if (!images || images.length === 0) {
        return (
            <div className="h-[400px] lg:h-[600px] bg-gray-100 flex items-center justify-center text-gray-400">
                No Image
            </div>
        );
    }

    const selectedImage = images[selectedIndex];

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
            {/* Main Image Area */}
            <div
                className="relative h-[400px] lg:h-[500px] bg-gray-100 group overflow-hidden cursor-zoom-in"
                onClick={openLightbox}
            >
                <Image
                    src={selectedImage}
                    alt={`${title} - Görsel ${selectedIndex + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                />

                {/* Zoom Icon */}
                <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-lg shadow-sm z-10 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                </div>
            </div>

            {/* Thumbnails (Only show if > 1 image) */}
            {images.length > 1 && (
                <div className="flex gap-2 p-4 border-t border-gray-100 overflow-x-auto">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedIndex(idx)}
                            className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${selectedIndex === idx
                                ? "border-red-600 opacity-100 ring-2 ring-red-100"
                                : "border-transparent opacity-60 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`${title} thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4 backdrop-blur-md transition-all duration-500 animate-[fadeIn_0.5s_ease-out]"
                    onClick={closeLightbox}
                >
                    {/* Custom Animation Styles */}
                    <style jsx global>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes zoomIn {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>

                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2 transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Buttons (Only if > 1 image) */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
                            >
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
                            >
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Main Lightbox Image */}
                    <div
                        className="relative w-full h-full max-w-6xl max-h-[90vh] animate-[zoomIn_0.5s_ease-out]"
                        onClick={(e) => e.stopPropagation()} // Prevent close on image click
                    >
                        <Image
                            src={selectedImage}
                            alt={`${title} - Tam Ekran`}
                            fill
                            className="object-contain drop-shadow-2xl"
                            quality={100}
                        />
                    </div>

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 font-medium bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm text-sm border border-white/10">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
