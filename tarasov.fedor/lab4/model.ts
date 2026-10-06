export class Travel {
  id: number;
  travelerName: string;
  visitedCountries: string[];

  constructor(
    id: number,
    travelerName: string,
    visitedCountries: string[] = [],
  ) {
    this.id = id;
    this.travelerName = travelerName;
    this.visitedCountries = [...visitedCountries];
  }

  addCountry(country: string): void {
    if (!this.visitedCountries.includes(country)) {
      this.visitedCountries.push(country);
    }
  }

  removeCountry(country: string): void {
    this.visitedCountries = this.visitedCountries.filter((c) => c !== country);
  }

  get visitedCount(): number {
    return this.visitedCountries.length;
  }
}

export function groupByVisitedCount(
  travels: Travel[],
): Record<number, Travel[]> {
  return travels.reduce(
    (acc, travel) => {
      const count = travel.visitedCount;
      if (!acc[count]) {
        acc[count] = [];
      }
      acc[count].push(travel);
      return acc;
    },
    {} as Record<number, Travel[]>,
  );
}

export function getUniqueVisitedCountries(travels: Travel[]): string[] {
  const uniqueCountries = new Set<string>();
  travels.forEach((travel) => {
    travel.visitedCountries.forEach((country) => uniqueCountries.add(country));
  });
  return Array.from(uniqueCountries);
}

export function getTravelsByCountry(
  travels: Travel[],
  country: string,
): Travel[] {
  return travels.filter((travel) => travel.visitedCountries.includes(country));
}

export function groupTravelersByCountry(
  travels: Travel[],
): Record<string, Travel[]> {
  const result: Record<string, Travel[]> = {};
  travels.forEach((travel) => {
    travel.visitedCountries.forEach((country) => {
      if (!result[country]) {
        result[country] = [];
      }
      result[country].push(travel);
    });
  });
  return result;
}

export function getTravelersWithMoreThanNCountries(
  travels: Travel[],
  n: number,
): Travel[] {
  return travels.filter((travel) => travel.visitedCount > n);
}
