export interface TimelineData {
  start: number;
  end: number;
  school: string;
  major: string;
  city: string;
  country: string;
  organization?: string[];
}

export interface TimelineProps {
  items: TimelineData[];
}
