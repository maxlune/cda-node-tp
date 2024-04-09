import path from "path";
import fs from "fs";
import { Movie } from "../../domain/entities/Movie";

export class MovieRepository {
  private movies: Movie[];
  private filepath = path.join(__dirname, "..", "data", "movies.json");

  constructor() {
    this.movies = this.getAllMovies();
  }

  public getAllMovies(): Movie[] {
    const data = fs.readFileSync(this.filepath, "utf-8");
    return JSON.parse(data);
  }

  public getMovieById(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new Error(`Movie not found`);
    }
    return movie;
  }
}
