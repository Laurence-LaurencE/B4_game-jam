// Tableau avec les ID pour récupérer toutes les îles.
const islands_identifier: Array<string> = [
  "ilet_1",
  "ilet_2",
  "ilet_3",
  "ilet_4",
  "ilet_5",
  "ilet_6",
];

// Tableau avec les élèments récupérés dans le HTML via les ID.
const islands_element: Array<HTMLElement> = [];

// Boucle qui parcours le tableau d'ID pour récupérer toutes les îles.
islands_identifier.forEach((island_identifier) => {
  const html_element = document.getElementById(island_identifier);

  if (html_element) {
    islands_element.push(html_element);
  }
});

// Fonction exécutée pour remettre les backgrounds des îles à leur état initial.
function resetIslandsBacknground(): void {
  islands_element.forEach((island_element) => {
    island_element.style.backgroundImage = "none";
  });
}

// Fonction exécutée pour seléctionner aléatoirement une île.
function selectRandomIsland(): void {
  // Avant de seléctionner une nouvelle île, on remet toutes les îles dans leur état initial.
  resetIslandsBacknground();

  const randomIndex = Math.floor(Math.random() * islands_element.length);
  const randomIsland: HTMLElement = islands_element[randomIndex];

  randomIsland.style.backgroundImage = 'url("./picture/coco_pix.png")';
  randomIsland.style.backgroundSize = "cover";
  randomIsland.style.backgroundPosition = "center";
}

// Exécute la fonction `selectRandomIsland` toutes les 3 secondes
setInterval(selectRandomIsland, 3000);
