
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  className?: string;
}

const CourseCard = ({
  title,
  description,
  image,
  level,
  duration,
  className,
}: CourseCardProps) => {
  return (
    <Card className={cn("overflow-hidden h-full bg-card/40 backdrop-blur-sm border-dynamous-900/30", className)}>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-center mb-2">
          <Badge
            variant="outline"
            className={cn(
              "px-2 py-1 text-xs font-semibold",
              level === "Beginner" && "bg-green-950/70 text-green-400 border-green-800/50",
              level === "Intermediate" && "bg-blue-950/70 text-blue-400 border-blue-800/50",
              level === "Advanced" && "bg-purple-950/70 text-purple-400 border-purple-800/50"
            )}
          >
            {level}
          </Badge>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight text-white">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center text-dynamous-400 text-sm font-medium hover:text-dynamous-300 transition-colors">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
