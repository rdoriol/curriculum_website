  // All the attributes are optional. Components use different attributes from the interface definition.
export interface CurriculumVitae {
  avatar: string;
  name: string;
  title: string;
  location: string;
  media: Media;
  about: string;
  technologies: Technologies[];
  experience: Experience[];
  projects: Projects[];
  training: Training[];
  extras?: Extras[];
}

interface Media {
  email: string;
  cv: string;
  github?: string;
  linkedin?: string;
}

interface Technologies {
  icon?: string;
  name: string;
}

interface GeneralSubdata {
  icon?: string;
  title: string;
  subtitle: string;
  description: string;
  date?: string;
}

interface Experience {
  mainData: GeneralSubdata;
}

interface Projects {
  mainData: GeneralSubdata;
  technologies: Technologies[];
  image: string;
  url?: string;
  github?: string;
}

interface Training {
  mainData: GeneralSubdata;
  certificate?: string;
}

interface Extras {
  image?: string;
  title: string;
  description: string;
  url?: string;
}
