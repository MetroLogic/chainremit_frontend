"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

const OfficeLocations = () => {
  // Not using a map yet, just static data for now
  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      country: "United States",
      timezone: "PST",
    },
    {
      city: "London",
      address: "456 Oxford Street, Floor 5",
      country: "United Kingdom",
      timezone: "GMT",
    },
    {
      city: "Singapore",
      address: "789 Marina Bay, Tower 2",
      country: "Singapore",
      timezone: "SGT",
    },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Our Offices
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Visit us at one of our global locations
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {offices.map((office, idx) => (
          <Card
            key={idx}
            className="hover:shadow-lg transition-shadow dark:bg-black border-1 border-white dark:border-white"
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">{office.city}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div>
                    <p>{office.address}</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {office.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {office.timezone}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OfficeLocations;
