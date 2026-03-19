const gameState = {
  bigGrid: Array(9).fill(null), // Stocke qui a gagné chaque petit morpion (X, O ou null)
  smallGrids: Array(9).fill(null).map(() => Array(9).fill(null)), // 9 grilles de 9 cases
  nextBigSquare: -1 // L'index (0-8) de la case où le joueur DOIT jouer (-1 = n'importe où)
};
