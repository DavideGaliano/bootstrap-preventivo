// Funzione per calcolare il prezzo finale
function calculatePrice() {
  // Definisci il numero di ore di lavoro per ogni progetto
  const hours = 10;

  // Ottieni il tipo di lavoro selezionato
  const workType = document.getElementById("work").value;

  // Definisci il prezzo orario per ogni tipo di lavoro
  let hourlyRate;
  if (workType === "Backend Development") {
    hourlyRate = 20.5;
  } else if (workType === "Frontend Development") {
    hourlyRate = 15.3;
  } else if (workType === "Project Analysis") {
    hourlyRate = 33.6;
  } else {
    // Se nessun tipo di lavoro è selezionato, mostra un messaggio di errore e interrompi
    alert("Per favore seleziona un tipo di lavoro.");
    return;
  }

  // Calcola il prezzo finale
  const finalPrice = hours * hourlyRate;

  // Dividi il prezzo in parte intera e parte decimale
  const integerPart = Math.floor(finalPrice);
  const decimalPart = finalPrice.toFixed(2).split(".")[1];

  // Aggiorna il contenuto dell'elemento con id "finalPrice" con gli stili richiesti
  document.getElementById(
    "finalPrice"
  ).innerHTML = `<strong>€ ${integerPart}</strong><span class="text-secondary">,${decimalPart}</span>`;
}

// Aggiungi un event listener per il click sul pulsante di submit
document
  .querySelector('button[type="button"]')
  .addEventListener("click", calculatePrice);
