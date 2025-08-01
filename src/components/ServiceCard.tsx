'use client';

import Link from 'next/link';
import Rating from './Rating';
import { useState, useEffect } from 'react';
import { favoriteService } from '@/lib/favorites';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  address: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  phone?: string;
}

export default function ServiceCard({
  id,
  name,
  description,
  category,
  address,
  rating,
  reviewCount,
  imageUrl,
  phone
}: ServiceCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const categoryLabels: { [key: string]: string } = {
    hospital: '동물병원',
    petshop: '펫샵',
    petsitter: '펫시터',
    grooming: '미용'
  };

  useEffect(() => {
    setIsFavorited(favoriteService.has(id));
  }, [id]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newFavoriteState = favoriteService.toggle(id);
    setIsFavorited(newFavoriteState);
  };

  return (
    <div className="card group cursor-pointer">
      <Link href={`/services/${id}`}>
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
            {categoryLabels[category] || category}
          </div>
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-3 right-3 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 ${
              isFavorited 
                ? 'bg-red-500 text-white opacity-100' 
                : 'bg-white/90 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100'
            }`}
          >
            <svg className="w-4 h-4" fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center space-x-2">
            <Rating rating={rating} size="sm" />
            <span className="text-sm text-gray-600">
              {rating.toFixed(1)} ({reviewCount}개 리뷰)
            </span>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {address}
          </div>

          {phone && (
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}