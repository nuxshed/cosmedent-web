export interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  sittings: string;
  doctor: string;
  points: string[];
  visual: string;
}

export interface Doctor {
  name: string;
  qual: string;
  bio: string;
  tags: string[];
}

export interface Review {
  quote: string;
  author: string;
  initials: string;
  source: string;
}

export interface Step {
  number: string;
  title: string;
  body: string;
}

export interface WhyItem {
  numeral: string;
  title: string;
  body: string;
}

export interface Hours {
  day: string;
  time: string;
}

export interface Contact {
  address: string;
  landmark: string;
  phone: string;
  phoneraw: string;
  whatsapp: string;
  hours: Hours[];
}
