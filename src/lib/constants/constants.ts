export const GAME_GENRES = [
  "Acción", "Aventura", "Arcade", "Carreras", "Deportes",
  "Estrategia", "Plataformas", "Puzzle", "RPG", "Terror", "Educativo", "Otro",
] as const;

type GameGenre = typeof GAME_GENRES[number];
