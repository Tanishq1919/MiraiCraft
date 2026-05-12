import { Link } from 'react-router';
import { Star } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  studentCount: number;
  lessonCount: number;
  price: number;
  level: string;
  thumbnail: string;
}

export function CourseCard({
  id,
  title,
  instructor,
  rating,
  studentCount,
  lessonCount,
  price,
  level,
  thumbnail,
}: CourseCardProps) {
  return (
    <Link to={`/courses/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{level}</Badge>
          </div>
          <h3 className="text-lg mb-2 line-clamp-2 dark:text-gray-100">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{instructor}</p>
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm dark:text-gray-300">{rating}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">({studentCount})</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">{lessonCount} lessons</span>
            <span className="text-lg text-blue-600 dark:text-blue-400">₹{price}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
