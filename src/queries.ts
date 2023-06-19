import db from "./db";
import { cities, countries, City, Country } from "./schema";

export async function getAllCities() {
  const allCities = await db.select().from(cities);

  return allCities;
}

export async function getAllCountries() {
  const allCountries = await db.select().from(countries);

  return allCountries;
}

export async function insertCity(newCities: City[]): Promise<City[]> {
  const insertedCities = await db.insert(cities).values(newCities).returning();

  return insertedCities;
}

export async function insertCountry(
  newCountries: Country[]
): Promise<Country[]> {
  const insertedCountries = await db
    .insert(countries)
    .values(newCountries)
    .returning();

  return insertedCountries;
}

export async function getAllCountriesWithCities() {
  const countries = await db.query.countries.findMany({
    with: {
      cities: true,
    },
  });

  return countries;
}

export async function getAllCitiesWithCountry() {
  const cities = await db.query.cities.findMany({
    with: {
      country: true,
    },
  });

  return cities;
}
