
// Funzione per calcolare il prezzo finale
function calculatePrice() {
  // Definisci il numero di ore di lavoro per ogni progetto
  const hours = 10;

  // Ottieni il tipo di lavoro selezionato
  const workTypeElement = document.getElementById("work");
  const workType = workTypeElement.value;

  // Definisci il prezzo orario per ogni tipo di lavoro
  let hourlyRate;
  if (workType === "Backend Development") {
    hourlyRate = 20.5;
    workTypeElement.classList.remove("is-invalid");
  } else if (workType === "Frontend Development") {
    hourlyRate = 15.3;
    workTypeElement.classList.remove("is-invalid");
  } else if (workType === "Project Analysis") {
    hourlyRate = 33.6;
    workTypeElement.classList.remove("is-invalid");
  } else {
    // Se nessun tipo di lavoro è selezionato, mostra un messaggio di errore
    workTypeElement.classList.add("is-invalid");
    return;
  }

  // Calcola il prezzo finale
  let finalPrice = hours * hourlyRate;
  const sconto = 25;

  // Ottieni il codice promozionale inserito dall'utente
  const promoCode = document.getElementById("codProm").value;

  // Elenco dei codici promozionali validi
  const validPromoCodes = [
    "YHDNU32",
    "JANJC63",
    "PWKCN25",
    "SJDPO96",
    "POCIE24",
  ];

  // Verifica se il codice promozionale è valido
  if (promoCode !== "" && validPromoCodes.includes(promoCode)) {
    // Applica uno sconto del 25%
    finalPrice = finalPrice - (finalPrice * sconto) / 100; // Sconto del 25%;
    // Rimuovi lo stato di errore se presente
    document.getElementById("codProm").classList.remove("is-invalid");
  } else if (promoCode !== "") {
    // Se il codice promozionale non è valido e non è vuoto, mostra un messaggio di errore
    document.getElementById("codProm").classList.add("is-invalid");
  } else {
    // Rimuovi lo stato di errore se presente
    document.getElementById("codProm").classList.remove("is-invalid");
  }

  // Dividi il prezzo in parte intera e parte decimale
  const integerPart = Math.floor(finalPrice);
  const decimalPart = finalPrice.toFixed(2).split(".")[1];

  // Aggiorna il contenuto dell'elemento con id "finalPrice" con gli stili richiesti
  document.getElementById(
    "finalPrice"
  ).innerHTML = `<strong>€ ${integerPart}</strong><span style="color: grey;">.${decimalPart}</span>`;
}

// Aggiungi un event listener per il click sul pulsante di submit
document
  .querySelector('button[type="button"]')
  .addEventListener("click", calculatePrice);
