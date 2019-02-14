export class RepoContentItem {
  name: string;
  icon: string;
  tip: string;
}

export class RepoTab {
  name: string;
  index: number;
}

export class RepoDetail {
  name: string;
  icon: string;
  description: string;
  status: string[];
  suggest: string;
  statusLabel: string;
  weAdvice: WeAdvice;
}

export class WordValues {
  word: string;
  value: string;
}

export class WeAdvice {
  label: string;
  contents?: string[];
  wordValues?: WordValues[];
}

export class RepoSchedule {
  title: string;
  schedule: ScheduleItem[];
}

export class ScheduleItem {
  content: string;
  date: string;
  tip: string;
  executive: string;
  import?: boolean;
}

export class Package {
  name: string;
  contents: string[];
  ranges: string[];
  worth: string;
  sell: number;
}
