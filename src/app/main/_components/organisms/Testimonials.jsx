'use client';
// React
import React, { useState } from 'react';

// Next Image
import Image from 'next/image';

// Icons
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// Utils
import testimonials from '@/main/_utils/testimonials';

// Components
import { Button } from '@/main/_components/atoms/Button';

// Images
import TestimonialImageOne from '@/main/_assets/images/testimonial-user-image.png';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide
  const translateStep = 35.6; // Translation step in rem

  const handleScrollUp = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleScrollDown = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="container testimonials">
      <div
        data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "slidesQty": {
          "xs": 1,
          "lg": 1
        },
        "isInfiniteLoop": true
      }'
      >
        <div className="row">
          <div className="caption">
            <div className="caption-top">
              <p>Testimonials</p>
              <hr />
            </div>
            <h3>What people say about us</h3>
            <div className="hs-carousel-pagination"></div>
          </div>
          <div className="hs-carousel">
            <div
              className="hs-carousel-body"
              style={{
                position: 'relative',
                transform: `translateY(${activeIndex * -translateStep}rem)`,
              }}
            >
              {testimonials.map((testimonial, index) => {
                const nextIndex = (index + 1) % testimonials.length; // Get the next slide index
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    className={`hs-carousel-slide ${isActive ? 'active' : ''}`}
                    style={{
                      position: 'absolute',
                      top: `${index * translateStep}rem`,
                      width: '100%',
                      zIndex: isActive ? 2 : 1,
                    }}
                  >
                    {isActive && (
                      <div className="hs-carousel-main">
                        <div className="testimonials-image">
                          <Image
                            src={TestimonialImageOne}
                            height={TestimonialImageOne.height}
                            width={TestimonialImageOne.width}
                            alt="Testimonial Image"
                          />
                        </div>
                        <div className="testimonials-content">
                          <blockquote>{`"${testimonial.text}"`}</blockquote>
                          <footer>
                            <h5>{testimonial.author}</h5>
                            <p>{testimonial.location}</p>
                          </footer>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="hs-carousel-nav">
              <Button
                type="button"
                className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:bg-gray-300"
                onClick={handleScrollUp}
              >
                <ChevronUpIcon aria-hidden="true" className="" />
                <span className="sr-only">Previous</span>
              </Button>

              <Button
                type="button"
                className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:bg-gray-300"
                onClick={handleScrollDown}
              >
                <span className="sr-only">Next</span>
                <ChevronDownIcon aria-hidden="true" className="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
