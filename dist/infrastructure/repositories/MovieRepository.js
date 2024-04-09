"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepository = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class MovieRepository {
    constructor() {
        this.filepath = path_1.default.join(__dirname, "..", "data", "movies.json");
        this.movies = this.getAllMovies();
    }
    getAllMovies() {
        const data = fs_1.default.readFileSync(this.filepath, "utf-8");
        return JSON.parse(data);
    }
    getMovieById(id) {
        const movie = this.movies.find((movie) => movie.id === id);
        if (!movie) {
            throw new Error(`Movie not found`);
        }
        return movie;
    }
}
exports.MovieRepository = MovieRepository;
