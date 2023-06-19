import express from "express";
import {
  getAllCities,
  insertCountry,
  insertCity,
  getAllCountries,
  getAllCountriesWithCities,
  getAllCitiesWithCountry,
} from "./queries";

const app = express();
const port = process.env.PORT || "8000";

app.get("/cities", (req, res) => {
  getAllCities().then((allCities) => {
    res.json(allCities);
  });
});

app.get("/countries", (req, res) => {
  getAllCountries().then((allCountries) => {
    res.json(allCountries);
  });
});

app.get("/countriesWithCities", (req, res) => {
  getAllCountriesWithCities().then((allCountriesWithCities) => {
    res.json(allCountriesWithCities);
  });
});

app.get("/citiesWithCountry", (req, res) => {
  getAllCitiesWithCountry().then((allCitiesWithCountry) => {
    res.json(allCitiesWithCountry);
  });
});

// Please use POST for inserting data ;)
app.get("/insertCountries", async (req, res) => {
  const countries = await insertCountry([
    { id: 1, name: "Germany" },
    { id: 2, name: "USA" },
    { id: 3, name: "UK" },
  ]);

  res.send(countries);
});

// Please use POST for inserting data ;)
app.get("/insertCities", async (req, res) => {
  const cities = await insertCity([
    { id: 1, name: "Berlin", countryId: 1, popularity: "popular" },
    { id: 2, name: "Jersey", countryId: 2, popularity: "unknown" },
    { id: 3, name: "London", countryId: 3, popularity: "known" },
    { id: 4, name: "Luton", countryId: 3, popularity: "known" },
    { id: 5, name: "Hamburg", countryId: 1, popularity: "known" },
  ]);

  res.send(cities);
});

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
