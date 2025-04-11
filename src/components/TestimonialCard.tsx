
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  className,
}: TestimonialCardProps) => {
  return (
    <Card className={cn("h-full bg-card/40 backdrop-blur-sm border-dynamous-900/30", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 text-dynamous-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M11.3 5.2c-3.5.7-6.3 3.2-7 6.7-.6 2.9.6 5.5 2.9 6.8 2.4 1.3 5.4.9 7.4-1.2 2.1-2.3 2.1-5.9 0-8.2C13.2 7.8 10.9 6.8 8.5 7c1.5-.9 3.3-1.4 5.2-1.4.5 0 .9-.4.9-.9s-.4-.9-.9-.9c-2.6 0-5.1.7-7.1 2.1-.4.3-.5.9-.2 1.3.3.4.9.5 1.3.2 1-.3 2-.7 3-.7.5 0 .9.4.9.9 0 .5-.4.9-.9.9-2.9 0-5.5 1.7-6.5 4.3-.8 1.9-.3 4 1.2 5.3 1.5 1.4 3.8 1.6 5.5.6 1.6-1 2.5-2.8 2.3-4.7-.2-2-1.6-3.6-3.5-4.2-.5-.2-1.1.1-1.2.6-.2.5.1 1.1.6 1.2 1.2.4 2 1.4 2.1 2.6.1 1.2-.4 2.3-1.4 2.9-1 .6-2.4.5-3.3-.4-.9-.8-1.2-2-1-3.1.3-1.5 1.5-2.8 3-3.2.5-.1.8-.6.7-1.1-.1-.5-.6-.8-1.1-.7z"/>
            </svg>
          </div>
          <p className="text-lg mb-6 flex-grow">{quote}</p>
          <div className="flex items-center mt-auto">
            {avatar ? (
              <img
                src={avatar}
                alt={author}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-dynamous-900/70 flex items-center justify-center mr-4">
                <span className="text-dynamous-400 text-lg font-semibold">
                  {author.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <h4 className="font-semibold">{author}</h4>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
