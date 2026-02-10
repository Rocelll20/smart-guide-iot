"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Profile from "@/assets/ryn.png";
import Profile1 from "@/assets/saguing.png";
import Profile2 from "@/assets/kheanne.jpg";
import Profile3 from "@/assets/cabasag.png";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Raguro, Ryn",
    role: "Product Manager",
    description: "Passionate about creating intuitive user experiences and driving product vision.",
    image: Profile,
  },
  {
    id: 2,
    name: "Saguing, Rocel",
    role: "Lead Developer",
    description: "Full-stack engineer with 8+ years of experience building scalable applications.",
    image: Profile1,
  },
  {
    id: 3,
    name: "Miguel, Kheanne",
    role: "AI/ML Specialist",
    description: "Expert in machine learning algorithms and intelligent recommendation systems.",
    image: Profile2,
  },
  {
    id: 4,
    name: "Cabasag, Claire",
    role: "UX/UI Designer",
    description: "Creative designer focused on building beautiful and accessible interfaces.",
    image:  Profile3,
  },
];

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleMembers = () => {
    const maxVisible = 3;
    const visible = [];
    for (let i = 0; i < maxVisible; i++) {
      visible.push(teamMembers[(currentIndex + i) % teamMembers.length]);
    }
    return visible;
  };

  return (
    <div className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Talented individuals united by a passion for education and innovation.
          Together, we're building the future of personalized learning.
        </p>
      </div>

      <div className="relative px-4">
        {/* Carousel Container */}
        <div className="flex justify-center items-center gap-6 mb-8">
          {getVisibleMembers().map((member) => (
            <div
              key={member.id}
              className="flex-1 max-w-xs bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex items-center justify-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm font-medium text-blue-500 mb-3">{member.role}</p>
              <p className="text-sm text-foreground/70">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full border border-border hover:bg-foreground/10 transition-colors"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full border border-border hover:bg-foreground/10 transition-colors"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-foreground"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
