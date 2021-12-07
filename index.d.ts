
type TBgImageList = { mobile: string, tablet: string, desktop: string }

/**
 * Pages Data
 */
type TDestinations = {
  name: string
  images: {
    png: string,
    webp: string,
  }
  description: string;
  distance: string;
  travel: string;
}
type TCrew = {
  name: string
  images: {
    png: string,
    webp: string,
  }
  role: string;
  bio: string;
}
type TTechnology = {
  name: string
  images: {
    portrait: string,
    landscape: string,
  }
  description: string;
}
type TData = {
  destinations: TDestinations[];
  crew: TCrew[];
  technologies: TTechnology[];
} 


//THEME
type TBreakpoints = {
  small: string;
  medium: string;
  large:  string,
  xLarge: string,
}

type TTheme = {
  colors: {
    primary: {
      base: string;
      dark: string;
    },
    secondary: {
      base: string; 
    },
    black: {
      base: string; 
    },
  },
  breakpoints: TBreakpoints;
}
