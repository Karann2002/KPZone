"use client";
import {
  MapPin,
  Star,
  IndianRupee,
} from "lucide-react";

import Link from "next/link";



interface Amenity {
  name: string;
}

interface Hostel {
  id: string | number;
  image: string;
  name: string;
  location: string;
  gender: string;
  rating: number;
  price: number;
  amenities: Amenity[];
}

interface HostelCardProps {
  hostel: Hostel;
}

const HostelCard: React.FC<HostelCardProps> = ({
  hostel,
}) => {
  return (
    <Link
      href={`/hostel/${hostel.id}`}
      className="bg-bg-surface rounded-3xl overflow-hidden shadow-sm border border-border-light flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary/20 group"
    >
      
      {/* Hostel Image */}
      <div className="relative h-[200px] overflow-hidden">
        
        <img
          src={hostel.image}
          alt={hostel.name}
          className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-text-primary shadow-sm">
            {hostel.gender}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Top Section */}
        <div className="flex justify-between items-start mb-4">
          
          <div>
            <h3 className="text-xl font-semibold mb-1 text-text-primary">
              {hostel.name}
            </h3>

            <p className="flex items-center gap-1 text-sm text-text-secondary">
              <MapPin
                size={14}
                className="text-text-tertiary"
              />

              {hostel.location}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 bg-status-success text-white px-2 py-1 rounded-md text-sm font-semibold">
            <Star
              size={14}
              fill="currentColor"
            />

            <span>{hostel.rating}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          
          {hostel.amenities
            .slice(0, 3)
            .map((amenity, index) => (
              <span
                key={index}
                className="bg-bg-surface-hover text-text-secondary px-2 py-1 rounded-md text-xs font-medium"
              >
                {amenity.name}
              </span>
            ))}

          {hostel.amenities.length > 3 && (
            <span className="bg-bg-surface-hover text-text-secondary px-2 py-1 rounded-md text-xs font-medium">
              +{hostel.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border-light">
          
          <div className="flex flex-col">
            
            <span className="flex items-center text-xl font-bold text-text-primary font-heading">
              <IndianRupee size={16} />

              {hostel.price.toLocaleString(
                "en-IN"
              )}
            </span>

            <span className="text-xs text-text-tertiary">
              / month onwards
            </span>
          </div>

          <span className="btn-primary px-4 py-2 text-sm cursor-pointer">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default HostelCard;