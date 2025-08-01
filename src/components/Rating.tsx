interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

export default function Rating({ 
  rating, 
  maxRating = 5, 
  size = 'md',
  showNumber = false 
}: RatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= rating;
    const isHalfFilled = i - 0.5 <= rating && rating < i;
    
    stars.push(
      <div key={i} className="relative">
        {/* 빈 별 */}
        <svg 
          className={`${sizeClasses[size]} text-gray-300`}
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        
        {/* 채워진 별 */}
        {(isFilled || isHalfFilled) && (
          <svg 
            className={`${sizeClasses[size]} text-accent absolute top-0 left-0`}
            fill="currentColor" 
            viewBox="0 0 20 20"
            style={{
              clipPath: isHalfFilled ? 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' : 'none'
            }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center">
        {stars}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-gray-700">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}