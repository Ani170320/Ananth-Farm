export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    quote: "I've tried mangoes from many places, but the premium box from Ananth Farm was incredible. You can really taste the difference when it comes straight from the tree to your home.",
  },
  {
    id: "2",
    name: "Rahul Desai",
    location: "Bangalore",
    quote: "The packaging was beautiful, and the mangoes were pristine. I adopted a tree last year, and getting updates about my tree's harvest before the box arrived made the whole experience so special.",
  },
  {
    id: "3",
    name: "Anita Menon",
    location: "Delhi",
    quote: "Finally, a brand that cares about how their mangoes are grown. The Banganapalli mangoes were perfectly sweet and had zero artificial ripening chemicals. Will be ordering again next season.",
  },
];
