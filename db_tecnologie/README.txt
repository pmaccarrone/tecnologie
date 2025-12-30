================================================================================
    STRUMENTI PER LE TECNOLOGIE DI PRODUZIONE
    Accademia Albertina di Belle Arti di Torino
    Scuola di Progettazione Artistica per l'Impresa
    Corso: Tecnologia dei Materiali
    Prof. Paolo Maccarrone
================================================================================

CONTENUTO DEL PACCHETTO
-----------------------
- database_tecnologie.html  : Database ricercabile di 180+ tecnologie
- mappa_tecnologica.html    : Mappa decisionale interattiva
- tutorial_tecnologie.html  : Guida all'uso degli strumenti
- README.txt                : Questo file


================================================================================
LA TASSONOMIA DELLA MAPPA: L'APPROCCIO "FORM-FIRST"
================================================================================

La Mappa Tecnologica organizza le tecnologie NON per tipo di processo 
(taglio, fusione, stampa...) ma per TIPO DI FORMA che producono.

Perche'? Perche' rispecchia il modo in cui un designer pensa:
"Devo realizzare un oggetto con questa geometria, quali tecnologie posso usare?"

STRUTTURA GERARCHICA
--------------------

LIVELLO 0 - FORMA (cerchio ciano centrale)
    Il punto di partenza. Tutto inizia dalla forma dell'oggetto da realizzare.

LIVELLO 1 - TIPOLOGIA FORMA (nodi rossi)
    Classifica gli oggetti per complessita' geometrica:

    PIANA
    - Geometria: superfici piatte, 2D, lastre
    - Esempi: lamiere tagliate, circuiti stampati, fogli, pannelli
    - Tecnologie tipiche: taglio laser, punzonatura, serigrafia

    LINEARE  
    - Geometria: oggetti con una dimensione prevalente
    - Esempi: tubi, barre, profilati, fili, travi
    - Tecnologie tipiche: estrusione, trafilatura, laminazione

    SEMPLICE (1 curvatura)
    - Geometria: superfici curve in UNA sola direzione
    - Caratteristica: sono "sviluppabili", cioe' srotolabili su un piano
    - Esempi: cilindri, coni, lamiere piegate, grondaie, tubi piegati
    - Tecnologie tipiche: calandratura, piegatura, curvatura
    - Nota: come un foglio di carta arrotolato - si puo' appiattire

    COMPLESSA (doppia curvatura)
    - Geometria: superfici curve in DUE direzioni, forme 3D articolate
    - Caratteristica: NON sviluppabili su un piano
    - Esempi: sfere, carrozzerie auto, caschi, bottiglie, sculture
    - Tecnologie tipiche: stampaggio, fusione, stampa 3D, soffiaggio
    - Nota: come una pallina da ping pong - non si puo' appiattire

LIVELLO 2 - ATTRIBUTI (nodi arancio/gialli)
    Specifica caratteristiche geometriche aggiuntive:

    MASSICCIO : oggetto pieno, senza cavita' interne
    CAVO      : oggetto con cavita', pareti sottili, gusci
    ENTRAMBI  : tecnologie adatte a entrambe le configurazioni

    Perche' e' importante: produrre un cubo PIENO di metallo (fusione, 
    fresatura dal pieno) richiede tecnologie completamente diverse da 
    un cubo CAVO (lamiera piegata e saldata, stampaggio).

LIVELLO 3 - MATERIALE (nodi blu)
    Il materiale di destinazione: Metalli, Polimeri, Legno, Vetro, 
    Ceramica, Compositi, Carta, Tessuti, ecc.

LIVELLO 4 - TECNOLOGIA (nodi azzurri)
    Le singole tecnologie di produzione. Click per vedere i dettagli.


================================================================================
COME USARE GLI STRUMENTI
================================================================================

SCENARIO 1: "Devo realizzare un oggetto, quale tecnologia uso?"
---------------------------------------------------------------
1. Apri mappa_tecnologica.html
2. Parti dal nodo centrale FORMA
3. Chiediti: che tipo di forma e'? (piana, lineare, semplice, complessa)
4. Segui il percorso: tipologia > massiccio/cavo > materiale
5. Esplora le tecnologie disponibili (nodi azzurri)
6. Click su una tecnologia per vedere l'anteprima
7. "Apri scheda completa" per tutti i dettagli nel Database

SCENARIO 2: "Voglio sapere tutto su una tecnologia specifica"
-------------------------------------------------------------
1. Apri database_tecnologie.html
2. Usa la barra di ricerca o i filtri per categoria
3. Click sulla riga per aprire la scheda completa
4. "Vedi nella Mappa" per capire dove si colloca

SCENARIO 3: "Ho requisiti specifici da rispettare"
--------------------------------------------------
1. Apri mappa_tecnologica.html
2. Segui il percorso fino al materiale
3. Apri il pannello FILTRI (tab a destra)
4. Seleziona i requisiti: trasparente, rigido, conduttivo, ecc.
5. I nodi non compatibili si oscurano
6. Esplora solo le tecnologie che soddisfano TUTTI i requisiti

SCENARIO 4: "Devo confrontare piu' tecnologie"
----------------------------------------------
1. Apri database_tecnologie.html
2. Attiva la modalita' selezione (bottone "Sel")
3. Seleziona le tecnologie da confrontare
4. Esporta in CSV (bottone "CSV")
5. Apri il file in Excel per il confronto


================================================================================
NAVIGAZIONE DELLA MAPPA
================================================================================

MOUSE E TASTIERA
----------------
- Rotella mouse    : zoom in/out
- Trascina sfondo  : sposta la vista
- Trascina nodo    : riposiziona e fissa il nodo (viene salvato!)
- Click su nodo    : seleziona e evidenzia il percorso
- Doppio click     : sblocca un nodo fissato
- Click su L4      : apre popup con dettagli tecnologia

PULSANTI TOOLBAR
----------------
- Fit Tutto        : mostra l'intero albero
- Fit Selezione    : zoom sul percorso selezionato
- Deseleziona      : rimuove la selezione
- Libera           : sblocca tutti i nodi fissati
- Reset Layout     : ripristina layout originale (cancella posizioni)
- Riordina         : rianima la simulazione fisica


================================================================================
NOTE TECNICHE
================================================================================

REQUISITI
- Browser moderno (Chrome, Firefox, Edge, Safari)
- JavaScript abilitato
- Connessione internet solo al primo avvio (carica libreria D3.js)

SALVATAGGIO POSIZIONI
La Mappa salva automaticamente le posizioni dei nodi nel browser 
(localStorage). Se vuoi ricominciare da zero, usa "Reset Layout".

USO OFFLINE
Scarica tutti i file HTML nella stessa cartella. Funzionano offline 
dopo il primo avvio (la libreria D3.js viene messa in cache).

LINK TRA STRUMENTI
Database e Mappa sono collegati bidirezionalmente:
- Dal Database: "Vedi nella Mappa" apre la mappa centrata sulla tecnologia
- Dalla Mappa: "Apri scheda completa" apre il Database sulla tecnologia


================================================================================
CREDITS
================================================================================

Accademia Albertina di Belle Arti di Torino
Scuola di Progettazione Artistica per l'Impresa (PAI)
Corso di Tecnologia dei Materiali
Prof. Paolo Maccarrone

Database: 183 tecnologie di produzione
Ultima revisione: 2025

================================================================================
