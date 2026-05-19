"use client";
import Filters from "@/components/Filter";
import HostelCard from "@/components/HostelCard";
import React, { useMemo, useState } from "react";

import {mockHostels} from "@/data/mockHostel"

/* ---------------- TYPES ---------------- */

interface FiltersState {
  maxPrice: number;
  genders: string[];
  occupancies: string[];
  amenities: string[];
}

interface Amenity {
  name: string;
}

interface Hostel {
  id: number;
  price: number;
  gender: string;
  occupancy: string[];
  amenities: Amenity[];
}

/* ---------------- COMPONENT ---------------- */

const Explore: React.FC = () => {
  
  const [filters, setFilters] =
    useState<FiltersState>({
      maxPrice: 25000,
      genders: [],
      occupancies: [],
      amenities: [],
    });

  const filteredHostels =
    useMemo(() => {
      return (
        mockHostels as Hostel[]
      ).filter((hostel) => {
        
        // Price Filter
        if (
          hostel.price >
          filters.maxPrice
        ) {
          return false;
        }

        // Gender Filter
        if (
          filters.genders.length >
            0 &&
          !filters.genders.includes(
            hostel.gender
          )
        ) {
          return false;
        }

        // Occupancy Filter
        if (
          filters.occupancies
            .length > 0
        ) {
          const hasOccupancy =
            hostel.occupancy.some(
              (occ) =>
                filters.occupancies.includes(
                  occ
                )
            );

          if (!hasOccupancy) {
            return false;
          }
        }

        // Amenities Filter
        if (
          filters.amenities
            .length > 0
        ) {
          const hostelAmenities =
            hostel.amenities.map(
              (a) => a.name
            );

          const hasAllAmenities =
            filters.amenities.every(
              (amen) => {
                let dataAmenity =
                  amen;

                if (
                  amen ===
                  "Food Included"
                ) {
                  dataAmenity =
                    "Meals";
                }

                return hostelAmenities.includes(
                  dataAmenity
                );
              }
            );

          if (
            !hasAllAmenities
          ) {
            return false;
          }
        }

        return true;
      });
    }, [filters]);

  const clearFilters = (): void => {
    setFilters({
      maxPrice: 25000,
      genders: [],
      occupancies: [],
      amenities: [],
    });
  };

  return (
    <div className="container mx-auto px-6 max-w-7xl py-8">
      
      {/* Header */}
      <div className="mb-8">
        
        <h1 className="text-3xl font-heading font-semibold mb-2">
          Hostels in Bangalore
        </h1>

        <p className="text-text-secondary">
          Showing{" "}
          {filteredHostels.length}{" "}
          properties
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-[300px] shrink-0">
          
          <Filters
            filters={filters}
            setFilters={
              setFilters
            }
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          
          {filteredHostels.length >
          0 ? (
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              
              {filteredHostels.map(
                (hostel) => (
                  <HostelCard
                    key={
                      hostel.id
                    }
                    hostel={
                      hostel
                    }
                  />
                )
              )}
            </div>
          ) : (
            
            <div className="text-center py-20 bg-bg-surface rounded-3xl border border-border-light">
              
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                No hostels found
              </h3>

              <p className="text-text-secondary">
                Try adjusting your
                filters to see
                more results.
              </p>

              <button
                onClick={
                  clearFilters
                }
                className="mt-4 text-brand-primary font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Explore;