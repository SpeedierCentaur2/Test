document.addEventListener('DOMContentLoaded', function() {
  const showTableBtn = document.getElementById('showTableBtn');
  const hideTableBtn = document.getElementById('hideTableBtn');
  const table = document.getElementById('Tabela_opinii');

  const initialData = [
    {
      imie: 'Jan',
      nazwisko: 'Kowalski',
      opinie: 'Wspaniała galeria z niesamowitymi obrazami, które zachwycają!',
      ocenaDziela: 5,
      ocenaUslugi: 4,
      Data_opinii: '2023-04-01'
  },
  {
      imie: 'Ewa',
      nazwisko: 'Nowak',
      opinie: 'Piękna kolekcja i bardzo miła obsługa. Na pewno tu wrócę!',
      ocenaDziela: 4,
      ocenaUslugi: 5,
      Data_opinii: '2023-04-03'
  },
  {
      imie: 'Piotr',
      nazwisko: 'Zieliński',
      opinie: 'Duży wybór dzieł sztuki, jestem bardzo zadowolony z zakupu.',
      ocenaDziela: 4,
      ocenaUslugi: 4,
      Data_opinii: '2023-04-05'
  },
  {
      imie: 'Anna',
      nazwisko: 'Wiśniewska',
      opinie: 'Świetna galeria, ale ceny niektórych dzieł są zbyt wysokie.',
      ocenaDziela: 3,
      ocenaUslugi: 3,
      Data_opinii: '2023-04-10'
  },
  {
      imie: 'Marek',
      nazwisko: 'Lewandowski',
      opinie: 'Dobra lokalizacja, ale brakuje promocji dla stałych klientów.',
      ocenaDziela: 4,
      ocenaUslugi: 2,
      Data_opinii: '2023-04-12'
  },
  {
      imie: 'Katarzyna',
      nazwisko: 'Borowicz',
      opinie: 'Najlepsza galeria sztuki w mieście!',
      ocenaDziela: 5,
      ocenaUslugi: 5,
      Data_opinii: '2023-04-15'
  },
  {
      imie: 'Łukasz',
      nazwisko: 'Mazur',
      opinie: 'Dobre ceny obrazów, ale mało miejsc parkingowych.',
      ocenaDziela: 4,
      ocenaUslugi: 3,
      Data_opinii: '2023-04-18'
  },
  {
      imie: 'Agnieszka',
      nazwisko: 'Kubiak',
      opinie: 'Przyjazne miejsce, idealne na rodzinne wyjście.',
      ocenaDziela: 4,
      ocenaUslugi: 5,
      Data_opinii: '2023-04-20'
  },
  {
      imie: 'Tomasz',
      nazwisko: 'Nowicki',
      opinie: 'Komfortowe wnętrze, ale ceny mogłyby być niższe.',
      ocenaDziela: 3,
      ocenaUslugi: 4,
      Data_opinii: '2023-04-22'
  },
  {
      imie: 'Magdalena',
      nazwisko: 'Szymańska',
      opinie: 'Bardzo pomocny i uśmiechnięty personel.',
      ocenaDziela: 5,
      ocenaUslugi: 5,
      Data_opinii: '2023-04-25'
  },
  {
      imie: 'Karolina',
      nazwisko: 'Wojcik',
      opinie: 'Piękne obrazy, ale niektóre opisy mogłyby być bardziej szczegółowe.',
      ocenaDziela: 4,
      ocenaUslugi: 3,
      Data_opinii: '2023-04-26'
  },
  {
      imie: 'Michał',
      nazwisko: 'Dąbrowski',
      opinie: 'Idealne miejsce na zakup wyjątkowego dzieła sztuki.',
      ocenaDziela: 5,
      ocenaUslugi: 5,
      Data_opinii: '2023-04-27'
  },
  {
      imie: 'Aleksandra',
      nazwisko: 'Ostrowska',
      opinie: 'Zbyt wysoka głośność muzyki w galerii, ale obrazy warte uwagi.',
      ocenaDziela: 3,
      ocenaUslugi: 3,
      Data_opinii: '2023-04-28'
  },
  {
      imie: 'Krzysztof',
      nazwisko: 'Kamiński',
      opinie: 'Galeria jest OK, ale brakuje nowości artystycznych.',
      ocenaDziela: 3,
      ocenaUslugi: 4,
      Data_opinii: '2023-04-29'
  },
  {
      imie: 'Monika',
      nazwisko: 'Zając',
      opinie: 'Fantastyczna jakość prezentowanych dzieł, ale czas oczekiwania na pomoc był długi.',
      ocenaDziela: 5,
      ocenaUslugi: 3,
      Data_opinii: '2023-04-30'
  },
  {
      imie: 'Marcin',
      nazwisko: 'Kowalczyk',
      opinie: 'Galeria godna polecenia, ale parking jest zawsze pełny.',
      ocenaDziela: 4,
      ocenaUslugi: 4,
      Data_opinii: '2023-05-01'
  },
  {
      imie: 'Zuzanna',
      nazwisko: 'Lis',
      opinie: 'Miła atmosfera, ale brak opcji zakupu dzieł sztuki online.',
      ocenaDziela: 4,
      ocenaUslugi: 2,
      Data_opinii: '2023-05-02'
  },
  {
      imie: 'Jakub',
      nazwisko: 'Wojciechowski',
      opinie: 'Świetne miejsce, ale ceny mogłyby być nieco niższe.',
      ocenaDziela: 4,
      ocenaUslugi: 3,
      Data_opinii: '2023-05-03'
  },
  {
      imie: 'Julia',
      nazwisko: 'Kowalska',
      opinie: 'Przytulne wnętrza, ale czasami zdarzają się opóźnienia w obsłudze.',
      ocenaDziela: 3,
      ocenaUslugi: 4,
      Data_opinii: '2023-05-04'
  },
  {
      imie: 'Mateusz',
      nazwisko: 'Zawadzki',
      opinie: 'Dobra jakość dzieł sztuki, ale słaba wentylacja w galerii.',
      ocenaDziela: 4,
      ocenaUslugi: 3,
      Data_opinii: '2023-05-05'
  }
  
];

  function insertDataIntoTable(data) {
      const tableBody = table.getElementsByTagName('tbody')[0];
      tableBody.innerHTML = ''; 
  
      data.forEach(rowData => {
          const newRow = document.createElement('tr');
          Object.values(rowData).forEach(text => {
              const cell = document.createElement('td');
              cell.textContent = text;
              newRow.appendChild(cell);
          });
          tableBody.appendChild(newRow);
      });
  
      const summaryRow = document.createElement('tr');
      const summaryCell = document.createElement('td');
      summaryCell.textContent = 'Łącznie opinii:';
      summaryCell.setAttribute('colspan', '5'); 
      summaryRow.appendChild(summaryCell);
  
      const totalReviewsCell = document.createElement('td');
      totalReviewsCell.textContent = data.length; 
      summaryRow.appendChild(totalReviewsCell);
  
      tableBody.appendChild(summaryRow);
  }

  showTableBtn.addEventListener('click', function() {
      insertDataIntoTable(initialData);
      table.style.display = 'block'; 
      showTableBtn.style.display = 'none';
      hideTableBtn.style.display = 'inline-block';
    });
  
    hideTableBtn.addEventListener('click', function() {
      table.style.display = 'none'; 
      showTableBtn.style.display = 'inline-block';
      hideTableBtn.style.display = 'none';
  });
});
