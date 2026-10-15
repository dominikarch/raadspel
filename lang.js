// Translations for the games. The games are written in Dutch; this list gives Polish and English for every text
// people see. Each line is [Dutch, Polish, English]. {0}, {1} … stand for names and numbers, in the same order as in
// the Dutch text. In Polish, {0|kamień|kamienie|kamieni} picks the right word for the number {0} (1 / 2-4 / 5+).
// Anything not in this list simply stays Dutch.
window.LANG_TEXTS = [
  // --- welcome, names, playing together ---
  ['🐶 Spelletjes', '🐶 Gierki', '🐶 Games'],
  ['Hoi! Wat gaan we doen?', 'Cześć! W co gramy?', 'Hi! What shall we play?'],
  ['Hoi {0}! Wat gaan we doen?', 'Cześć {0}! W co gramy?', 'Hi {0}! What shall we play?'],
  ['🐶 Alleen spelen', '🐶 Graj sam', '🐶 Play alone'],
  ['Tegen het hondje', 'Z pieskiem', 'Against the dog'],
  ['👫 Samen spelen', '👫 Graj razem', '👫 Play together'],
  ['Met een vriend op een ander apparaat', 'Z kolegą na innym urządzeniu', 'With a friend on another device'],
  ['Ik ben iemand anders', 'Jestem kimś innym', "I'm someone else"],
  ['versie {0}', 'wersja {0}', 'version {0}'],
  ['Hoe heet je?', 'Jak masz na imię?', "What's your name?"],
  ['OK', 'OK', 'OK'],
  ['Typ eerst je naam.', 'Najpierw wpisz swoje imię.', 'Type your name first.'],
  ['← Terug', '← Wróć', '← Back'],
  ['← Stoppen', '← Zakończ', '← Stop'],
  ['← Ander spel', '← Inna gra', '← Other game'],
  ['← Ander level', '← Inny poziom', '← Other level'],
  ['Welk spel?', 'Która gra?', 'Which game?'],
  ['✨ Nieuw spel', '✨ Nowa gra', '✨ New game'],
  ['Je krijgt een code voor je vriend', 'Dostaniesz kod dla kolegi', 'You get a code for your friend'],
  ['🔑 Meedoen', '🔑 Dołącz', '🔑 Join'],
  ['Typ de code van je vriend', 'Wpisz kod kolegi', "Type your friend's code"],
  ['Jouw code is', 'Twój kod to', 'Your code is'],
  ['Laat deze code aan je vriend zien.', 'Pokaż ten kod koledze.', 'Show this code to your friend.'],
  ['Wachten tot je vriend meedoet…', 'Czekamy, aż kolega dołączy…', 'Waiting for your friend to join…'],
  ['Typ de code', 'Wpisz kod', 'Type the code'],
  ['De code heeft 4 cijfers.', 'Kod ma 4 cyfry.', 'The code has 4 digits.'],
  ['Zoeken…', 'Szukam…', 'Searching…'],
  ['Geen spel gevonden met deze code.', 'Nie ma gry z tym kodem.', 'No game found with this code.'],
  ['Dit spel is al vol.', 'Ta gra jest już pełna.', 'This game is full.'],
  ['Samen spelen is nog niet klaar.', 'Gra razem jeszcze nie działa.', "Playing together isn't ready yet."],
  ['Samen spelen lukt alleen met internet.', 'Gra razem działa tylko z internetem.', 'Playing together needs the internet.'],
  ['Verbinden lukt niet. Is er internet?', 'Nie mogę się połączyć. Czy jest internet?', "Can't connect. Is there internet?"],
  ['🔄 Verbinding even kwijt… opnieuw verbinden', '🔄 Na chwilę straciliśmy połączenie… łączę ponownie', '🔄 Lost the connection for a moment… reconnecting'],
  ['Je speelt samen met {0}! Welk spel?', 'Grasz razem z: {0}! Która gra?', "You're playing with {0}! Which game?"],
  ['{0} doet mee! Je speelt samen met {1}! Welk spel?', '{0} dołącza! Grasz razem z: {1}! Która gra?', '{0} joined! You\'re playing with {1}! Which game?'],
  ['{0} is weggegaan. Je speelt samen met {1}! Welk spel?', '{0} wyszedł(a). Grasz razem z: {1}! Która gra?', '{0} left. You\'re playing with {1}! Which game?'],
  ['{0} is weggegaan.', '{0} wyszedł(a) z gry.', '{0} left the game.'],
  ['{0} en {1}', '{0} i {1}', '{0} and {1}'],
  ['{0}, {1} en {2}', '{0}, {1} i {2}', '{0}, {1} and {2}'],
  ['📱 {0} is even weg… we wachten.', '📱 {0} na chwilę wyszedł(a)… czekamy.', '📱 {0} is away for a moment… we\'re waiting.'],
  ['📱 {0} is even weg… we wachten. Komt er niemand terug? Houd Stoppen vast.', '📱 {0} na chwilę wyszedł(a)… czekamy. Nikt nie wraca? Przytrzymaj Zakończ.', '📱 {0} is away for a moment… we\'re waiting. Nobody coming back? Hold Stop.'],
  ['👋 {0} is terug!', '👋 {0} wrócił(a)!', '👋 {0} is back!'],
  ['✋ Houd vast om te stoppen', '✋ Przytrzymaj, żeby zakończyć', '✋ Hold to stop'],
  ['Houd vast…', 'Trzymaj…', 'Keep holding…'],
  ['Stoppen?', 'Zakończyć?', 'Stop?'],
  ['Dan stopt het spel ook voor {0}.', 'Wtedy gra skończy się też dla: {0}.', 'Then the game also stops for {0}.'],
  ['Nee, verder spelen', 'Nie, gramy dalej', 'No, keep playing'],
  ['Ja, stoppen', 'Tak, zakończ', 'Yes, stop'],
  ['Nog een keer!', 'Jeszcze raz!', 'Again!'],
  ['Nog een ronde!', 'Jeszcze jedna runda!', 'Another round!'],
  ['Jij', 'Ty', 'You'],
  ['jij', 'ty', 'you'],
  ['Hondje', 'Piesek', 'Doggy'],
  ['het hondje', 'piesek', 'the dog'],
  ['Het hondje', 'Piesek', 'The dog'],
  ['🐶 Hondje', '🐶 Piesek', '🐶 Doggy'],
  ['Het hondje denkt na…', 'Piesek myśli…', 'The dog is thinking…'],
  ['Het hondje mikt…', 'Piesek celuje…', 'The dog is aiming…'],
  ['🐶 Het hondje wint! Woef!', '🐶 Piesek wygrywa! Hau!', '🐶 The dog wins! Woof!'],
  ['Jij bent aan de beurt!', 'Twoja kolej!', 'Your turn!'],
  ['Jij bent aan de beurt.', 'Twoja kolej.', 'Your turn.'],
  ['{0} is aan de beurt…', 'Teraz gra {0}…', "It's {0}'s turn…"],
  ['🐶 {0} is aan de beurt…', '🐶 Teraz gra {0}…', "🐶 It's {0}'s turn…"],
  ['{0} heeft gewonnen!', '{0} wygrywa!', '{0} won!'],
  ['🎉 Jij hebt gewonnen!', '🎉 Wygrałeś!', '🎉 You won!'],
  ['🤝 Gelijkspel!', '🤝 Remis!', "🤝 It's a draw!"],
  ['Welk spel?', 'Która gra?', 'Which game?'],

  // --- game names and the game lists ---
  ['🔢 Raad het getal', '🔢 Zgadnij liczbę', '🔢 Guess the number'],
  ['Het hondje verstopt een getal', 'Piesek chowa liczbę', 'The dog hides a number'],
  ['De een verstopt, de ander raadt', 'Jeden chowa, drugi zgaduje', 'One hides, the other guesses'],
  ['❌⭕ Boter-kaas-en-eieren', '❌⭕ Kółko i krzyżyk', '❌⭕ Tic-tac-toe'],
  ['Drie op een rij tegen het hondje', 'Trzy w rzędzie z pieskiem', 'Three in a row against the dog'],
  ['Drie op een rij', 'Trzy w rzędzie', 'Three in a row'],
  ['🔴🟡 Vier op een rij', '🔴🟡 Cztery w rzędzie', '🔴🟡 Four in a row'],
  ['Vier op een rij tegen het hondje', 'Cztery w rzędzie z pieskiem', 'Four in a row against the dog'],
  ['Wie heeft er eerst vier?', 'Kto pierwszy ułoży cztery?', 'Who gets four first?'],
  ['🏓 Stenen-breker', '🏓 Zbijak cegiełek', '🏓 Brick breaker'],
  ['Breek alle stenen met het balletje', 'Zbij wszystkie cegiełki piłeczką', 'Break all the bricks with the ball'],
  ['Wie haalt de meeste punten?', 'Kto zdobędzie najwięcej punktów?', 'Who scores the most points?'],
  ['🐍 Snake', '🐍 Wąż', '🐍 Snake'],
  ['Eet fruit en word zo lang mogelijk', 'Jedz owoce i rośnij jak najdłużej', 'Eat fruit and grow as long as you can'],
  ['Wie wordt het langst?', 'Kto będzie najdłuższy?', 'Who gets the longest?'],
  ['🐶 Gravity Run', '🐶 Gravity Run', '🐶 Gravity Run'],
  ['Tik en het hondje valt naar boven of beneden', 'Stuknij, a piesek spada w górę albo w dół', 'Tap and the dog falls up or down'],
  ['Wie komt het verst?', 'Kto dobiegnie najdalej?', 'Who gets the furthest?'],
  ['💅 Nagelsalon', '💅 Salon paznokci', '💅 Nail salon'],
  ['Lak, glitter en stickers op je nageltjes', 'Lakier, brokat i naklejki na paznokcie', 'Polish, glitter and stickers on your nails'],
  ['💫 Crash', '💫 Autka', '💫 Crash'],
  ['Botsautootjes: bots zo vaak je kan!', 'Samochodziki: zderzaj się jak najczęściej!', 'Bumper cars: bump as often as you can!'],
  ['Botsautootjes in dezelfde arena', 'Samochodziki na jednej arenie', 'Bumper cars in the same arena'],
  ['⚫ Dammen', '⚫ Warcaby', '⚫ Draughts'],
  ['Echt dammen op het grote bord, tegen het hondje', 'Prawdziwe warcaby na dużej planszy, z pieskiem', 'Real draughts on the big board, against the dog'],
  ['Echt dammen op het grote bord', 'Prawdziwe warcaby na dużej planszy', 'Real draughts on the big board'],
  ['🏓 Ping pong', '🏓 Ping-pong', '🏓 Ping pong'],
  ['Speel tafeltennis tegen het hondje', 'Zagraj w ping-ponga z pieskiem', 'Play table tennis against the dog'],
  ['Ieder een eigen batje', 'Każdy ma swoją paletkę', 'Everyone has their own bat'],
  ['♞ Schaken', '♞ Szachy', '♞ Chess'],
  ['Echt schaken tegen het hondje', 'Prawdziwe szachy z pieskiem', 'Real chess against the dog'],
  ['Echt schaken samen', 'Prawdziwe szachy razem', 'Real chess together'],
  ['🎱 Pool', '🎱 Bilard', '🎱 Pool'],
  ['8-ball tegen het hondje', '8-ball z pieskiem', '8-ball against the dog'],
  ['8-ball, om de beurt', '8-ball, na zmianę', '8-ball, taking turns'],
  ['🀄 Rummi', '🀄 Rummi', '🀄 Rummi'],
  ['Stenen-spel met 1 tot 4 spelers', 'Gra w kamienie dla 1 do 4 graczy', 'Tile game for 1 to 4 players'],
  ['Stenen-spel, met hondjes erbij', 'Gra w kamienie, z pieskami', 'Tile game, with dogs joining in'],
  ['🚢 Zeeslag', '🚢 Statki', '🚢 Battleships'],
  ['Laat de schepen van het hondje zinken', 'Zatop statki pieska', "Sink the dog's ships"],
  ['Laat elkaars schepen zinken', 'Zatapiajcie sobie statki', "Sink each other's ships"],

  // --- levels and dogs ---
  ['Ik verstop een getal. Kun jij het vinden?', 'Chowam liczbę. Znajdziesz ją?', 'I hide a number. Can you find it?'],
  ['🐣 Makkelijk', '🐣 Łatwy', '🐣 Easy'],
  ['🐰 Gemiddeld', '🐰 Średni', '🐰 Medium'],
  ['🦊 Moeilijk', '🦊 Trudny', '🦊 Hard'],
  ['🦄 Meester', '🦄 Mistrz', '🦄 Master'],
  ['1 tot 9', '1 do 9', '1 to 9'],
  ['1 tot 99', '1 do 99', '1 to 99'],
  ['1 tot 999', '1 do 999', '1 to 999'],
  ['1 tot 9999', '1 do 9999', '1 to 9999'],
  ['Hoe slim is het hondje?', 'Jak sprytny jest piesek?', 'How clever is the dog?'],
  ['Hoe slim zijn de hondjes?', 'Jak sprytne są pieski?', 'How clever are the dogs?'],
  ['🐶 Puppy', '🐶 Szczeniaczek', '🐶 Puppy'],
  ['🐕 Slimme hond', '🐕 Sprytny pies', '🐕 Clever dog'],
  ['Makkelijk', 'Łatwy', 'Easy'],
  ['Moeilijk', 'Trudny', 'Hard'],
  ['Denkt vooruit', 'Myśli do przodu', 'Thinks ahead'],
  ['Mikt een beetje scheef', 'Celuje trochę krzywo', 'Aims a bit crooked'],
  ['Mikt heel goed', 'Celuje bardzo dobrze', 'Aims very well'],
  ['Kies je plaatje', 'Wybierz obrazek', 'Pick your picture'],
  ['Wachten tot {0} een plaatje kiest…', 'Czekamy, aż {0} wybierze obrazek…', 'Waiting for {0} to pick a picture…'],
  ['{0} heeft dit plaatje al.', '{0} ma już ten obrazek.', '{0} already has this picture.'],
  ['{0} heeft dit plaatje al. Kies een ander.', '{0} ma już ten obrazek. Wybierz inny.', '{0} already has this picture. Pick another one.'],

  // --- Raad het getal ---
  ['Typ je gok!', 'Wpisz swój strzał!', 'Type your guess!'],
  ['{0} heeft een getal verstopt. Typ je gok!', '{0} schował(a) liczbę. Wpisz swój strzał!', '{0} hid a number. Type your guess!'],
  ['Het getal zit tussen', 'Liczba jest między', 'The number is between'],
  ['en', 'a', 'and'],
  ['Gokken: {0}', 'Próby: {0}', 'Guesses: {0}'],
  ['Kies van 1 tot {0}', 'Wybierz od 1 do {0}', 'Choose from 1 to {0}'],
  ['Kies van 1 tot {0}.', 'Wybierz od 1 do {0}.', 'Choose from 1 to {0}.'],
  ['{0}… {1} kijkt', '{0}… {1} sprawdza', '{0}… {1} is checking'],
  ['Woef! {0} is te laag. Hoger! ⬆️', 'Hau! {0} to za mało. Wyżej! ⬆️', 'Woof! {0} is too low. Higher! ⬆️'],
  ['Woef! {0} is te hoog. Lager! ⬇️', 'Hau! {0} to za dużo. Niżej! ⬇️', 'Woof! {0} is too high. Lower! ⬇️'],
  ['Goed zo!', 'Brawo!', 'Well done!'],
  ['Het getal was', 'Liczba to', 'The number was'],
  ['In één keer! Wauw!', 'Za pierwszym razem! Wow!', 'First try! Wow!'],
  ['In één keer!', 'Za pierwszym razem!', 'First try!'],
  ['Je had {0} gokken nodig.', 'Potrzebowałeś {0} {0|próby|prób|prób}.', 'You needed {0} guesses.'],
  ['{0} had {1} gokken nodig.', '{0} potrzebował(a) prób: {1}.', '{0} needed {1} guesses.'],
  ['Raad het getal met {0}. Wie verstopt het getal?', 'Zgadnij liczbę z: {0}. Kto chowa liczbę?', 'Guess the number with {0}. Who hides the number?'],
  ['🙈 Ik verstop', '🙈 Ja chowam', '🙈 I hide'],
  ['Jij kiest het getal', 'Ty wybierasz liczbę', 'You choose the number'],
  ['🔍 Ik raad', '🔍 Ja zgaduję', '🔍 I guess'],
  ['De ander kiest het getal', 'Ktoś inny wybiera liczbę', 'The other one chooses the number'],
  ['Hoe moeilijk maak je het?', 'Jak trudno ma być?', 'How hard will you make it?'],
  ['Typ je geheime getal', 'Wpisz swoją tajną liczbę', 'Type your secret number'],
  ['van 1 tot {0}', 'od 1 do {0}', 'from 1 to {0}'],
  ['{0} gaat raden!', '{0} będzie zgadywać!', '{0} is going to guess!'],
  ['Jouw geheime getal:', 'Twoja tajna liczba:', 'Your secret number:'],
  ['{0} verstopt een getal…', '{0} chowa liczbę…', '{0} is hiding a number…'],
  ['Even wachten…', 'Chwileczkę…', 'Just a moment…'],
  ['{0} — geraden! 🎉', '{0} — zgadnięte! 🎉', '{0} — guessed! 🎉'],
  ['{0} — te laag ⬆️', '{0} — za mało ⬆️', '{0} — too low ⬆️'],
  ['{0} — te hoog ⬇️', '{0} — za dużo ⬇️', '{0} — too high ⬇️'],
  ['heeft het geraden!', 'zgadł(a)!', 'guessed it!'],

  // --- Boter-kaas-en-eieren / Vier op een rij / Dammen ---
  ['Jij moet slaan!', 'Musisz bić!', 'You must capture!'],
  ['Jij moet slaan! ({0} stenen)', 'Musisz bić! ({0} {0|pionek|pionki|pionków})', 'You must capture! ({0} pieces)'],
  ['Deze steen kan niet: een andere steen moet slaan!', 'Ten pionek nie może: inny pionek musi bić!', "This piece can't: another piece must capture!"],
  ['🤝 Remise: 25 zetten alleen met dammen, niemand kan meer winnen.', '🤝 Remis: 25 ruchów samymi damkami, nikt już nie wygra.', '🤝 Draw: 25 moves with only kings, nobody can win any more.'],

  // --- Zeeslag ---
  ['Hoe groot is de zee?', 'Jak duże jest morze?', 'How big is the sea?'],
  ['🐣 Klein', '🐣 Małe', '🐣 Small'],
  ['🐰 Middel', '🐰 Średnie', '🐰 Medium'],
  ['🦊 Groot', '🦊 Duże', '🦊 Big'],
  ['6 × 6, 3 schepen', '6 × 6, 3 statki', '6 × 6, 3 ships'],
  ['8 × 8, 4 schepen', '8 × 8, 4 statki', '8 × 8, 4 ships'],
  ['10 × 10, 5 schepen', '10 × 10, 5 statków', '10 × 10, 5 ships'],
  ['Zet je schepen op de zee', 'Ustaw statki na morzu', 'Put your ships on the sea'],
  ['Tik waar je schip van {0} moet beginnen (liggend ➡️)', 'Stuknij, gdzie ma się zaczynać statek o długości {0} (poziomo ➡️)', 'Tap where your ship of {0} should start (lying ➡️)'],
  ['Tik waar je schip van {0} moet beginnen (rechtop ⬇️)', 'Stuknij, gdzie ma się zaczynać statek o długości {0} (pionowo ⬇️)', 'Tap where your ship of {0} should start (standing ⬇️)'],
  ['Alle schepen staan klaar!', 'Wszystkie statki gotowe!', 'All ships are ready!'],
  ['🔄 Draaien', '🔄 Obróć', '🔄 Turn'],
  ['🎲 Hussel', '🎲 Losuj', '🎲 Shuffle'],
  ['↩️ Opnieuw', '↩️ Od nowa', '↩️ Start over'],
  ['Klaar!', 'Gotowe!', 'Done!'],
  ['Daar past het schip niet. Probeer een ander plekje of draai het.', 'Tu statek się nie zmieści. Spróbuj gdzie indziej albo go obróć.', "The ship doesn't fit there. Try another spot or turn it."],
  ['Schepen mogen elkaar niet raken, ook niet met een hoekje.', 'Statki nie mogą się stykać, nawet rogami.', "Ships may not touch, not even at the corners."],
  ['Wachten tot {0} klaar is…', 'Czekamy, aż {0} będzie gotowy…', 'Waiting for {0} to be ready…'],
  ['Zee van het hondje', 'Morze pieska', "The dog's sea"],
  ['Zee van {0}', 'Morze: {0}', "{0}'s sea"],
  ['Jouw zee', 'Twoje morze', 'Your sea'],
  ['Jij bent aan de beurt! Tik op hun zee.', 'Twoja kolej! Stuknij w ich morze.', 'Your turn! Tap their sea.'],
  ['Mikken…', 'Celujesz…', 'Aiming…'],
  ['💧 Mis! Nu is {0} aan de beurt.', '💧 Pudło! Teraz {0}.', "💧 Miss! Now it's {0}'s turn."],
  ['💥 Raak! Nu is {0} aan de beurt.', '💥 Trafiony! Teraz {0}.', "💥 Hit! Now it's {0}'s turn."],
  ['🔥 Gezonken! Nu is {0} aan de beurt.', '🔥 Zatopiony! Teraz {0}.', "🔥 Sunk! Now it's {0}'s turn."],
  ['{0} schoot mis. Jij bent aan de beurt!', '{0} spudłował(a). Twoja kolej!', '{0} missed. Your turn!'],
  ['{0} heeft je schip geraakt! Jij bent aan de beurt.', '{0} trafił(a) twój statek! Twoja kolej.', '{0} hit your ship! Your turn.'],
  ['{0} heeft je schip laten zinken! Jij bent aan de beurt.', '{0} zatopił(a) twój statek! Twoja kolej.', '{0} sank your ship! Your turn.'],
  ['🎉 Jij hebt gewonnen! Alle schepen zijn gezonken!', '🎉 Wygrałeś! Wszystkie statki zatopione!', '🎉 You won! All ships are sunk!'],

  // --- points games: Stenen-breker, Snake, Gravity Run ---
  ['Hoe snel gaat het balletje?', 'Jak szybko leci piłeczka?', 'How fast is the ball?'],
  ['🐢 Langzaam', '🐢 Wolno', '🐢 Slow'],
  ['🐇 Gewoon', '🐇 Normalnie', '🐇 Normal'],
  ['🚀 Snel', '🚀 Szybko', '🚀 Fast'],
  ['Record: {0}', 'Rekord: {0}', 'Record: {0}'],
  ['Record: {0} fruit', 'Rekord: {0} {0|owoc|owoce|owoców}', 'Record: {0} fruit'],
  ['{0} punten', '{0} {0|punkt|punkty|punktów}', '{0} points'],
  ['Veld {0}/{1}', 'Plansza {0}/{1}', 'Level {0}/{1}'],
  ['Veld {0}', 'Plansza {0}', 'Level {0}'],
  ['Tik om het balletje weg te schieten!', 'Stuknij, żeby wystrzelić piłeczkę!', 'Tap to launch the ball!'],
  ['Alle velden gehaald!', 'Wszystkie plansze zaliczone!', 'All levels done!'],
  ['Geen hartjes meer', 'Koniec serduszek', 'No hearts left'],
  ['Geen hartjes meer!', 'Koniec serduszek!', 'No hearts left!'],
  ['🏆 Alle velden uitgespeeld!', '🏆 Wszystkie plansze ukończone!', '🏆 All levels completed!'],
  ['🎉 Nieuw record: {0} punten!', '🎉 Nowy rekord: {0} {0|punkt|punkty|punktów}!', '🎉 New record: {0} points!'],
  ['🎉 Nieuw record: {0} fruit!', '🎉 Nowy rekord: {0} {0|owoc|owoce|owoców}!', '🎉 New record: {0} fruit!'],
  ['{0} punten. Record: {1}', '{0} {0|punkt|punkty|punktów}. Rekord: {1}', '{0} points. Record: {1}'],
  ['🎉 Nieuw record: {0} meter!', '🎉 Nowy rekord: {0} {0|metr|metry|metrów}!', '🎉 New record: {0} metres!'],
  ['{0} meter. Record: {1}', '{0} {0|metr|metry|metrów}. Rekord: {1}', '{0} metres. Record: {1}'],
  ['{0} fruit. Record: {1}', '{0} {0|owoc|owoce|owoców}. Rekord: {1}', '{0} fruit. Record: {1}'],
  ['Klaar! Wachten tot {0} klaar is…', 'Koniec! Czekamy, aż {0} skończy…', 'Done! Waiting for {0} to finish…'],
  ['🎉 Jij wint! {0} tegen {1}', '🎉 Wygrywasz! {0} do {1}', '🎉 You win! {0} to {1}'],
  ['{0} wint! {1} tegen {2}', '{0} wygrywa! {1} do {2}', '{0} wins! {1} to {2}'],
  ['🤝 Gelijkspel! Allebei {0}', '🤝 Remis! Oboje po {0}', '🤝 Draw! Both {0}'],
  ['{0} (klaar)', '{0} (koniec)', '{0} (done)'],
  ['Wat gebeurt er bij de muur?', 'Co się dzieje przy ścianie?', 'What happens at the wall?'],
  ['🌀 Door de muur', '🌀 Przez ścianę', '🌀 Through the wall'],
  ['Je komt er aan de andere kant weer uit', 'Wychodzisz z drugiej strony', 'You come out on the other side'],
  ['🧱 Muur = af', '🧱 Ściana = koniec', '🧱 Wall = out'],
  ['Zoals het echte spel', 'Jak w prawdziwej grze', 'Like the real game'],
  ['Tik op een pijl of veeg om te beginnen!', 'Stuknij strzałkę albo przesuń palcem, żeby zacząć!', 'Tap an arrow or swipe to start!'],
  ['🐍 {0} fruit', '🐍 {0} {0|owoc|owoce|owoców}', '🐍 {0} fruit'],
  ['🧱 Bonk! Tegen de muur.', '🧱 Bum! W ścianę.', '🧱 Bonk! Into the wall.'],
  ['Au! Je beet in je eigen staart.', 'Au! Ugryzłeś się w ogon.', 'Ouch! You bit your own tail.'],
  ['Af!', 'Koniec!', 'Out!'],
  ['Tik op het veld: het hondje valt naar boven of naar beneden!', 'Stuknij w planszę: piesek spada w górę albo w dół!', 'Tap the field: the dog falls up or down!'],
  ['🏃 {0} meter', '🏃 {0} {0|metr|metry|metrów}', '🏃 {0} metres'],
  ['{0} meter', '{0} {0|metr|metry|metrów}', '{0} metres'],
  ['🧱 Au! {0} meter en {1} 💎.', '🧱 Au! {0} {0|metr|metry|metrów} i {1} 💎.', '🧱 Ouch! {0} metres and {1} 💎.'],

  // --- Crash ---
  ['Tik op de vloer: daar rijdt je auto heen!', 'Stuknij w podłogę: tam pojedzie twoje autko!', 'Tap the floor: your car drives there!'],
  ['Klaar voor de start…', 'Gotowi do startu…', 'Ready, steady…'],
  ['⏱️ {0} seconden', '⏱️ {0} {0|sekunda|sekundy|sekund}', '⏱️ {0} seconds'],
  ['💥 {0} botsingen', '💥 {0} {0|zderzenie|zderzenia|zderzeń}', '💥 {0} bumps'],
  ['Tijd is om!', 'Koniec czasu!', "Time's up!"],
  ['🏆 Jij wint met {0} botsingen!', '🏆 Wygrywasz: {0} {0|zderzenie|zderzenia|zderzeń}!', '🏆 You win with {0} bumps!'],
  ['🤝 Gelijk! Jij en {0} hebben {1}.', '🤝 Remis! Ty i {0} macie po {1}.', '🤝 A tie! You and {0} have {1}.'],
  ['{0} {1} wint met {2}. Jij had er {3}.', '{0} {1} wygrywa: {2}. Ty masz {3}.', '{0} {1} wins with {2}. You had {3}.'],
  ['🎉 Nieuw record!', '🎉 Nowy rekord!', '🎉 New record!'],
  ['Poes', 'Kotek', 'Kitty'],
  ['Konijn', 'Królik', 'Bunny'],
  ['Vos', 'Lis', 'Fox'],

  // --- Ping pong ---
  ['Tot hoeveel punten?', 'Do ilu punktów?', 'Up to how many points?'],
  ['kort', 'krótko', 'short'],
  ['middel', 'średnio', 'medium'],
  ['echt', 'jak naprawdę', 'real'],
  ['Schuif met je vinger om je batje te bewegen!', 'Przesuwaj palcem, żeby ruszać paletką!', 'Slide your finger to move your bat!'],
  ['🏆 Jij wint! {0} tegen {1}', '🏆 Wygrywasz! {0} do {1}', '🏆 You win! {0} to {1}'],
  ['🐶 Het hondje wint {0} tegen {1}. Woef!', '🐶 Piesek wygrywa {0} do {1}. Hau!', '🐶 The dog wins {0} to {1}. Woof!'],
  ['{0} wint {1} tegen {2}.', '{0} wygrywa {1} do {2}.', '{0} wins {1} to {2}.'],

  // --- Pool ---
  ['🎱 Hoe goed mikt het hondje?', '🎱 Jak dobrze celuje piesek?', '🎱 How well does the dog aim?'],
  ['Jij mag afstoten! Trek terug en laat los.', 'Rozbijasz! Odciągnij i puść.', 'You break! Pull back and let go.'],
  ['Jij bent aan de beurt. Je mag de witte bal neerleggen: tik waar hij moet liggen.', 'Twoja kolej. Możesz położyć białą bilę: stuknij, gdzie ma leżeć.', 'Your turn. You may place the white ball: tap where it should go.'],
  ['Mooi! Nu mag je stoten.', 'Super! Teraz uderzaj.', 'Nice! Now take your shot.'],
  ['Tik waar de witte bal moet liggen', 'Stuknij, gdzie ma leżeć biała bila', 'Tap where the white ball should go'],
  ['● hele ({0})', '● pełne ({0})', '● solids ({0})'],
  ['◐ halve ({0})', '◐ połówki ({0})', '◐ stripes ({0})'],
  ['Fout: De witte bal ging erin!', 'Faul: biała bila wpadła!', 'Foul: the white ball went in!'],
  ['Fout: De witte bal raakte geen bal.', 'Faul: biała bila w nic nie trafiła.', 'Foul: the white ball hit nothing.'],
  ['Fout: Eerst de verkeerde bal geraakt.', 'Faul: najpierw trafiona zła bila.', 'Foul: hit the wrong ball first.'],
  ['Fout: Eerst de zwarte 8 geraakt.', 'Faul: najpierw trafiona czarna ósemka.', 'Foul: hit the black 8 first.'],
  ['Erin! 🎉 Jij mag nog een keer.', 'Wpadła! 🎉 Grasz jeszcze raz.', 'In! 🎉 You go again.'],
  ['{0} tikte er een in.', '{0} wbił(a) bilę.', '{0} potted one.'],
  ['De zwarte 8 erin! 🏆 Jij wint!', 'Czarna ósemka wpadła! 🏆 Wygrywasz!', 'The black 8 is in! 🏆 You win!'],
  ['De zwarte 8 erin! 🐶 Het hondje wint! Woef!', 'Czarna ósemka wpadła! 🐶 Piesek wygrywa! Hau!', 'The black 8 is in! 🐶 The dog wins! Woof!'],
  ['De zwarte 8 erin! {0} wint!', 'Czarna ósemka wpadła! {0} wygrywa!', 'The black 8 is in! {0} wins!'],
  ['De zwarte 8 ging te vroeg erin. 🏆 Jij wint!', 'Czarna ósemka wpadła za wcześnie. 🏆 Wygrywasz!', 'The black 8 went in too early. 🏆 You win!'],
  ['De zwarte 8 ging te vroeg erin. 🐶 Het hondje wint! Woef!', 'Czarna ósemka wpadła za wcześnie. 🐶 Piesek wygrywa! Hau!', 'The black 8 went in too early. 🐶 The dog wins! Woof!'],
  ['De zwarte 8 ging te vroeg erin. {0} wint!', 'Czarna ósemka wpadła za wcześnie. {0} wygrywa!', 'The black 8 went in too early. {0} wins!'],

  // --- Schaken ---
  ['Welke stukken?', 'Jakie figury?', 'Which pieces?'],
  ['Klassiek', 'Klasyczne', 'Classic'],
  ['Dieren', 'Zwierzęta', 'Animals'],
  ['K-pop', 'K-pop', 'K-pop'],
  ['Spelen!', 'Gramy!', 'Play!'],
  ['↩️ Terug', '↩️ Cofnij', '↩️ Undo'],
  ['♟️ Stukken', '♟️ Figury', '♟️ Pieces'],
  ['🏳️ Opgeven', '🏳️ Poddaj się', '🏳️ Give up'],
  ['⚠️ Schaak! Jij bent aan de beurt.', '⚠️ Szach! Twoja kolej.', '⚠️ Check! Your turn.'],
  ['⚠️ Schaak! Het hondje denkt na…', '⚠️ Szach! Piesek myśli…', '⚠️ Check! The dog is thinking…'],
  ['⚠️ Schaak! {0} is aan de beurt…', '⚠️ Szach! Teraz gra {0}…', "⚠️ Check! It's {0}'s turn…"],
  ['👑 Je pion is aan de overkant! Waar wordt hij?', '👑 Twój pionek doszedł do końca! Czym ma zostać?', '👑 Your pawn reached the other side! What will it become?'],
  ['Schaakmat! 🎉 Jij hebt gewonnen!', 'Szach mat! 🎉 Wygrałeś!', 'Checkmate! 🎉 You won!'],
  ['Schaakmat! 🐶 Het hondje wint! Woef!', 'Szach mat! 🐶 Piesek wygrywa! Hau!', 'Checkmate! 🐶 The dog wins! Woof!'],
  ['Schaakmat! {0} heeft gewonnen!', 'Szach mat! {0} wygrywa!', 'Checkmate! {0} won!'],
  ['Je hebt opgegeven. 🐶 Het hondje wint! Woef!', 'Poddałeś się. 🐶 Piesek wygrywa! Hau!', 'You gave up. 🐶 The dog wins! Woof!'],
  ['Je hebt opgegeven. {0} heeft gewonnen!', 'Poddałeś się. {0} wygrywa!', 'You gave up. {0} won!'],
  ['{0} geeft op. 🎉 Jij hebt gewonnen!', '{0} się poddaje. 🎉 Wygrałeś!', '{0} gives up. 🎉 You won!'],
  ['🤝 Remise. Pat: geen zet meer, maar ook geen schaak.', '🤝 Remis. Pat: nie ma ruchu, ale nie ma też szacha.', '🤝 Draw. Stalemate: no move left, but no check either.'],
  ['🤝 Remise. Te weinig stukken om nog te winnen.', '🤝 Remis. Za mało figur, żeby wygrać.', '🤝 Draw. Too few pieces left to win.'],
  ['🤝 Remise. 50 zetten zonder slaan of pion.', '🤝 Remis. 50 ruchów bez bicia i bez pionka.', '🤝 Draw. 50 moves without a capture or a pawn move.'],
  ['🤝 Remise. Drie keer dezelfde stand.', '🤝 Remis. Trzy razy ta sama pozycja.', '🤝 Draw. The same position three times.'],

  // --- Rummi ---
  ['Hoeveel spelers?', 'Ilu graczy?', 'How many players?'],
  ['Oefenen: leg al je stenen zo snel mogelijk weg.', 'Ćwiczenie: wyłóż wszystkie kamienie jak najszybciej.', 'Practice: lay down all your tiles as fast as you can.'],
  ['Jij en {0} hondje.', 'Ty i {0} piesek.', 'You and {0} dog.'],
  ['Jij en {0} hondjes.', 'Ty i {0} {0|piesek|pieski|piesków}.', 'You and {0} dogs.'],
  ['{0} en {1} hondje.', '{0} i {1} piesek.', '{0} and {1} dog.'],
  ['{0} en {1} hondjes.', '{0} i {1} {1|piesek|pieski|piesków}.', '{0} and {1} dogs.'],
  ['Jij en {0}.', 'Ty i {0}.', 'You and {0}.'],
    ['Welke regels?', 'Jakie zasady?', 'Which rules?'],
  ['⭐ Echt', '⭐ Prawdziwe', '⭐ Real'],
  ['eerst 30 punten, schuiven mag', 'najpierw 30 punktów, można przesuwać', 'first 30 points, moving allowed'],
  ['geen 30, niet schuiven', 'bez 30, bez przesuwania', 'no 30, no moving'],
  ['Hondje Bo', 'Piesek Bo', 'Doggy Bo'],
  ['Hondje Fien', 'Piesek Fien', 'Doggy Fien'],
  ['Hondje Max', 'Piesek Max', 'Doggy Max'],
  ['Jij: {0}', 'Ty: {0}', 'You: {0}'],
  ['Hondje Bo: {0}', 'Piesek Bo: {0}', 'Doggy Bo: {0}'],
  ['Hondje Fien: {0}', 'Piesek Fien: {0}', 'Doggy Fien: {0}'],
  ['Hondje Max: {0}', 'Piesek Max: {0}', 'Doggy Max: {0}'],
  ['🔢 Sorteer', '🔢 Sortuj', '🔢 Sort'],
  ['🎨 Sorteer', '🎨 Sortuj', '🎨 Sort'],
  ['🎴 Pak een steen', '🎴 Weź kamień', '🎴 Take a tile'],
  ['⏭️ Pas', '⏭️ Pasuję', '⏭️ Pass'],
  ['✅ Klaar', '✅ Gotowe', '✅ Done'],
  ['+ nieuw rijtje', '+ nowy rząd', '+ new row'],
  ['Nog niks op tafel.', 'Na stole jeszcze nic nie ma.', 'Nothing on the table yet.'],
  ['Je bakje is leeg!', 'Twoja podstawka jest pusta!', 'Your rack is empty!'],
  ['Jij bent aan de beurt! Je eerste keer moet samen minstens 30 punten zijn.', 'Twoja kolej! Za pierwszym razem musisz wyłożyć co najmniej 30 punktów.', 'Your turn! Your first move must add up to at least 30 points.'],
  ['In het makkelijke spel blijven de stenen op tafel liggen. Je mag er wel stenen bij leggen.', 'W łatwej grze kamienie na stole zostają na miejscu. Możesz za to dokładać swoje.', 'In the easy game the tiles on the table stay put. You may add tiles to them.'],
  ['Eerst moet je zelf 30 punten uitleggen, daarna mag je stenen op tafel verschuiven.', 'Najpierw musisz sam wyłożyć 30 punktów, potem możesz przesuwać kamienie na stole.', 'First lay down 30 points yourself, then you may move tiles on the table.'],
  ['Stenen die al op tafel lagen mogen niet terug in je bakje.', 'Kamienie, które już leżały na stole, nie mogą wrócić na podstawkę.', "Tiles that were already on the table can't go back to your rack."],
  ['Alles staat weer zoals aan het begin van je beurt.', 'Wszystko jest znowu jak na początku twojej kolejki.', 'Everything is back to how it was at the start of your turn.'],
  ['Leg eerst een steen op tafel, of tik op "Pak een steen".', 'Najpierw połóż kamień na stole albo stuknij „Weź kamień”.', 'Put a tile on the table first, or tap "Take a tile".'],
  ['Een rijtje klopt nog niet (rood). Maak er een groepje of een rij van, minstens 3 stenen.', 'Jeden rząd jest jeszcze zły (czerwony). Ułóż grupę albo ciąg, co najmniej 3 kamienie.', "A row isn't right yet (red). Make a group or a run, at least 3 tiles."],
  ['De eerste keer mag je alleen nieuwe rijtjes van je eigen stenen leggen.', 'Za pierwszym razem możesz kłaść tylko nowe rzędy z własnych kamieni.', 'The first time you may only lay new rows of your own tiles.'],
  ['Je eerste keer is samen {0} punten. Je hebt er minstens 30 nodig.', 'Twój pierwszy ruch to razem {0} {0|punkt|punkty|punktów}. Potrzebujesz co najmniej 30.', 'Your first move adds up to {0} points. You need at least 30.'],
  ['🏆 Jij wint! Jij heeft alle stenen weggelegd!', '🏆 Wygrywasz! Wyłożyłeś wszystkie kamienie!', '🏆 You win! You laid down all your tiles!'],
  ['🏆 Jij wint! Jij heeft de minste punten over.', '🏆 Wygrywasz! Zostało ci najmniej punktów.', '🏆 You win! You have the fewest points left.'],
  ['{0} wint: {1} heeft alle stenen weggelegd!', 'Wygrywa {0}: wyłożył(a) wszystkie kamienie!', '{0} wins: {1} laid down all the tiles!'],
  ['{0} wint: {1} heeft de minste punten over.', 'Wygrywa {0}: zostało mu (jej) najmniej punktów.', '{0} wins: {1} has the fewest points left.'],
  ['🐶 {0} wint: {1} heeft alle stenen weggelegd!', '🐶 Wygrywa {0}: wyłożył wszystkie kamienie!', '🐶 {0} wins: {1} laid down all the tiles!'],
  ['🐶 {0} wint: {1} heeft de minste punten over.', '🐶 Wygrywa {0}: zostało mu najmniej punktów.', '🐶 {0} wins: {1} has the fewest points left.'],
  ['🐶 {0} pakt een steen.', '🐶 {0} bierze kamień.', '🐶 {0} takes a tile.'],
  ['{0} legde {1} stenen ✨', '{0} położył(a) {1} {1|kamień|kamienie|kamieni} ✨', '{0} laid {1} tiles ✨'],
  ['{0} legde {1} steen ✨', '{0} położył(a) {1} kamień ✨', '{0} laid {1} tile ✨'],
  ['{0} legde {1} stenen en schoof met de tafel ✨', '{0} położył(a) {1} {1|kamień|kamienie|kamieni} i poprzesuwał(a) stół ✨', '{0} laid {1} tiles and moved things around ✨'],
  ['{0} legde {1} steen en schoof met de tafel ✨', '{0} położył(a) {1} kamień i poprzesuwał(a) stół ✨', '{0} laid {1} tile and moved things around ✨'],
  ['{0} pakte een steen.', '{0} wziął (wzięła) kamień.', '{0} took a tile.'],
  ['{0} paste.', '{0} pasuje.', '{0} passed.'],

  // --- Vleermuis-vlucht ---
  ['🦇 Vleermuis-vlucht', '🦇 Lot nietoperza', '🦇 Bat flight'],
  ['Fladder langs spinnen en spoken, pak het snoep', 'Leć obok pająków i duchów, zbieraj cukierki', 'Flutter past spiders and ghosts, grab the candy'],
  ['Wie vliegt het verst?', 'Kto doleci najdalej?', 'Who flies the furthest?'],
  ['Hoe snel vliegt de vleermuis?', 'Jak szybko leci nietoperz?', 'How fast does the bat fly?'],
  ['Tik om te fladderen! Pak het snoep, bots nergens tegen.', 'Stukaj, żeby machać skrzydłami! Zbieraj cukierki i w nic nie uderzaj.', "Tap to flap! Grab the candy, don't bump into anything."],
  ['Tik om te vliegen!', 'Stuknij, żeby lecieć!', 'Tap to fly!'],
  ['Tik om verder te vliegen!', 'Stuknij, żeby lecieć dalej!', 'Tap to fly on!'],
  ['{0} 🍬 {1} · {2} punten', '{0} 🍬 {1} · {2} {2|punkt|punkty|punktów}', '{0} 🍬 {1} · {2} points'],
  ['🍬 {0} · {1} punten', '🍬 {0} · {1} {1|punkt|punkty|punktów}', '🍬 {0} · {1} points'],
  ['🦇 {0} meter', '🦇 {0} {0|metr|metry|metrów}', '🦇 {0} metres'],
  ['🦇 Au! {0} meter en {1} 🍬.', '🦇 Au! {0} {0|metr|metry|metrów} i {1} 🍬.', '🦇 Ouch! {0} metres and {1} 🍬.'],

  // --- Pompoen versieren ---
  ['🎃 Pompoen versieren', '🎃 Ozdabianie dyni', '🎃 Pumpkin carving'],
  ['Snijden, verven en versieren voor Halloween', 'Wycinanie, malowanie i ozdabianie na Halloween', 'Carve, paint and decorate for Halloween'],
  ['Pompoen', 'Dynia', 'Pumpkin'], ['Gezichten', 'Buzie', 'Faces'], ['Ogen', 'Oczy', 'Eyes'], ['Neus', 'Nos', 'Nose'], ['Mond', 'Usta', 'Mouth'],
  ['Snijden', 'Wycinanie', 'Carve'], ['Verven', 'Malowanie', 'Paint'], ['Spulletjes', 'Dodatki', 'Extras'], ['Plek', 'Miejsce', 'Place'],
  ['Mijn pompoenen', 'Moje dynie', 'My pumpkins'],
  ['Lief', 'Słodka', 'Sweet'], ['Vampier', 'Wampir', 'Vampire'], ['Verbaasd', 'Zdziwiona', 'Surprised'], ['Blij', 'Wesoła', 'Happy'],
  ['Bang', 'Przestraszona', 'Scared'], ['Sterren', 'Gwiazdki', 'Stars'],
  ['Zelf snijden', 'Wytnij sam', 'Carve yourself'], ['gum', 'gumka', 'eraser'],
  ['🕯️ Licht', '🕯️ Światło', '🕯️ Light'], ['🧹 Alles weg', '🧹 Wyczyść', '🧹 Clear all'],
  ['Kleiner', 'Mniejsze', 'Smaller'], ['Groter', 'Większe', 'Bigger'], ['Draaien', 'Obróć', 'Turn'], ['Spiegelen', 'Odbij', 'Mirror'],
  ['Naar voren', 'Na wierzch', 'To the front'], ['Nog een', 'Jeszcze jedno', 'One more'], ['Weg', 'Usuń', 'Remove'],
  ['Teken met je vinger een rondje op de pompoen: dat wordt een gat.', 'Narysuj palcem kształt na dyni: to będzie dziura.', 'Draw a shape on the pumpkin with your finger: it becomes a hole.'],
  ['Kies een vorm, of 🔪 en snij zelf.', 'Wybierz kształt albo 🔪 i wytnij sam.', 'Pick a shape, or 🔪 and carve yourself.'],
  ['Veeg over de verf om hem weg te halen.', 'Przesuń palcem po farbie, żeby ją zetrzeć.', 'Swipe over the paint to remove it.'],
  ['Kies een kleur en verf met je vinger op de pompoen.', 'Wybierz kolor i maluj palcem po dyni.', 'Pick a colour and paint on the pumpkin with your finger.'],
  ['Kies een heel gezicht in één keer.', 'Wybierz całą buzię naraz.', 'Pick a whole face at once.'],
  ['Tik op ogen. Daarna kun je ze verschuiven.', 'Stuknij oczy. Potem możesz je przesuwać.', 'Tap some eyes. Then you can move them.'],
  ['Tik op een neus.', 'Stuknij nos.', 'Tap a nose.'], ['Tik op een mond.', 'Stuknij usta.', 'Tap a mouth.'],
  ['Tik op iets om het op je pompoen te zetten.', 'Stuknij coś, żeby położyć to na dyni.', 'Tap something to put it on your pumpkin.'],
  ['Kies je pompoen.', 'Wybierz dynię.', 'Choose your pumpkin.'], ['Waar staat je pompoen?', 'Gdzie stoi twoja dynia?', 'Where is your pumpkin?'],
  ['Tik op een foto om hem groot te zien.', 'Stuknij zdjęcie, żeby je powiększyć.', 'Tap a photo to see it big.'],
  ['Nog geen foto’s. Tik op ✨ Klaar! om er een te maken.', 'Jeszcze nie ma zdjęć. Stuknij ✨ Gotowe!, żeby je zrobić.', 'No photos yet. Tap ✨ Done! to make one.'],
  ['🎃 De pompoen van {0}', '🎃 Dynia: {0}', "🎃 {0}'s pumpkin"], ['🎃 Mijn pompoen', '🎃 Moja dynia', '🎃 My pumpkin'],
  ['🗑️ Weg uit mijn pompoenen', '🗑️ Usuń z moich dyń', '🗑️ Remove from my pumpkins'],

  // --- Virussen ---
  ['🦠 Virussen', '🦠 Wirusy', '🦠 Viruses'],
  ['Kaartspel: maak een gezond lichaam', 'Gra karciana: zbuduj zdrowe ciało', 'Card game: build a healthy body'],
  ['Kaartspel, met hondjes erbij', 'Gra karciana, z pieskami', 'Card game, with dogs joining in'],
  ['Hart', 'Serce', 'Heart'], ['Maag', 'Żołądek', 'Stomach'], ['Hersenen', 'Mózg', 'Brain'], ['Bot', 'Kość', 'Bone'],
  ['Regenboog-orgaan', 'Tęczowy organ', 'Rainbow organ'], ['Virus', 'Wirus', 'Virus'], ['Medicijn', 'Lekarstwo', 'Medicine'],
  ['Transplantatie', 'Przeszczep', 'Transplant'], ['Orgaandief', 'Złodziej organów', 'Organ thief'], ['Besmetting', 'Zarażenie', 'Contagion'],
  ['Latex handschoen', 'Lateksowa rękawiczka', 'Latex glove'], ['Medische fout', 'Błąd lekarski', 'Medical error'],
  ['Nog geen organen', 'Jeszcze brak organów', 'No organs yet'],
  ['▶️ Speel deze kaart', '▶️ Zagraj tę kartę', '▶️ Play this card'],
  ['🗑️ Kaarten weggooien', '🗑️ Wyrzuć karty', '🗑️ Throw cards away'],
  ['🗑️ Gooi weg', '🗑️ Wyrzuć', '🗑️ Throw away'],
  ['Terug', 'Wróć', 'Back'],
  ['📖 Regels', '📖 Zasady', '📖 Rules'],
  ['Tik op 1 tot 3 kaarten om weg te gooien.', 'Stuknij od 1 do 3 kart, które chcesz wyrzucić.', 'Tap 1 to 3 cards to throw away.'],
  ['Deze kaart kan nu niet. Kies een andere of gooi kaarten weg.', 'Tej karty nie można teraz zagrać. Wybierz inną albo wyrzuć karty.', "This card can't be played now. Pick another one or throw cards away."],
  ['Orgaan: leg het bij jezelf. Twee dezelfde organen mag niet.', 'Organ: połóż go u siebie. Nie możesz mieć dwóch takich samych.', "Organ: put it in your own body. You can't have two of the same."],
  ['Virus: tik op een orgaan van een ander met dezelfde kleur.', 'Wirus: stuknij organ innego gracza w tym samym kolorze.', "Virus: tap another player's organ of the same colour."],
  ['Medicijn: tik op je eigen orgaan met dezelfde kleur.', 'Lekarstwo: stuknij swój organ w tym samym kolorze.', 'Medicine: tap your own organ of the same colour.'],
  ['Transplantatie: tik op twee organen van twee spelers om ze te ruilen.', 'Przeszczep: stuknij dwa organy dwóch graczy, żeby je zamienić.', 'Transplant: tap two organs of two players to swap them.'],
  ['Tik nu op het tweede orgaan.', 'Teraz stuknij drugi organ.', 'Now tap the second organ.'],
  ['Orgaandief: tik op een orgaan van een ander om het te pakken.', 'Złodziej organów: stuknij organ innego gracza, żeby go zabrać.', "Organ thief: tap another player's organ to take it."],
  ['Besmetting: je virussen springen naar vrije organen van anderen.', 'Zarażenie: twoje wirusy przeskakują na wolne organy innych.', "Contagion: your viruses jump to other players' free organs."],
  ['Latex handschoen: alle anderen gooien hun kaarten weg.', 'Lateksowa rękawiczka: wszyscy inni wyrzucają swoje karty.', 'Latex glove: everyone else throws their cards away.'],
  ['Medische fout: tik op een speler om je hele lichaam te ruilen.', 'Błąd lekarski: stuknij gracza, żeby zamienić się całym ciałem.', 'Medical error: tap a player to swap your whole body.'],
  ['Besmetting: tik op je zieke orgaan.', 'Zarażenie: stuknij swój chory organ.', 'Contagion: tap your sick organ.'],
  ['Besmetting: tik op een vrij orgaan van een ander.', 'Zarażenie: stuknij wolny organ innego gracza.', "Contagion: tap another player's free organ."],
  ['Tik nu op een vrij orgaan van een ander.', 'Teraz stuknij wolny organ innego gracza.', "Now tap another player's free organ."],
  ['{0} legt neer: {1}.', '{0} kładzie: {1}.', '{0} puts down: {1}.'],
  ['🦠 {0} besmet een orgaan van {1}.', '🦠 {0} zaraża organ gracza {1}.', "🦠 {0} infects an organ of {1}."],
  ['💥 {0} vernietigt een orgaan van {1}!', '💥 {0} niszczy organ gracza {1}!', '💥 {0} destroys an organ of {1}!'],
  ['🦠 {0} breekt een medicijn van {1}.', '🦠 {0} niszczy lekarstwo gracza {1}.', '🦠 {0} breaks a medicine of {1}.'],
  ['💊 {0} geneest een orgaan.', '💊 {0} leczy organ.', '💊 {0} cures an organ.'],
  ['🛡️ {0} maakt een orgaan immuun!', '🛡️ {0} uodparnia organ!', '🛡️ {0} makes an organ immune!'],
  ['💊 {0} beschermt een orgaan.', '💊 {0} chroni organ.', '💊 {0} protects an organ.'],
  ['🦝 {0} steelt een orgaan van {1}!', '🦝 {0} kradnie organ graczowi {1}!', '🦝 {0} steals an organ from {1}!'],
  ['🔄 {0} ruilt organen van {1} en {2}.', '🔄 {0} zamienia organy: {1} i {2}.', '🔄 {0} swaps organs of {1} and {2}.'],
  ['🔁 {0} ruilt het hele lichaam met {1}!', '🔁 {0} zamienia się całym ciałem z graczem {1}!', '🔁 {0} swaps whole bodies with {1}!'],
  ['🧤 {0} speelt de latex handschoen: alle anderen gooien hun kaarten weg!', '🧤 {0} zagrywa lateksową rękawiczkę: wszyscy inni wyrzucają karty!', '🧤 {0} plays the latex glove: everyone else throws their cards away!'],
  ['🤧 {0} verspreidt virussen: {1}!', '🤧 {0} rozsiewa wirusy: {1}!', '🤧 {0} spreads viruses: {1}!'],
  ['🗑️ {0} gooit kaarten weg: {1}.', '🗑️ {0} wyrzuca karty: {1}.', '🗑️ {0} throws cards away: {1}.'],
  ['🧤 {0} pakt nieuwe kaarten en slaat een beurt over.', '🧤 {0} bierze nowe karty i traci kolejkę.', '🧤 {0} takes new cards and misses a turn.'],
  ['🏆 Jij wint! Jouw lichaam is gezond!', '🏆 Wygrywasz! Twoje ciało jest zdrowe!', '🏆 You win! Your body is healthy!'],
  ['{0} wint met een gezond lichaam!', '{0} wygrywa ze zdrowym ciałem!', '{0} wins with a healthy body!'],
  ['Doel:', 'Cel:', 'Goal:'],
  [' wie het eerst 4 gezonde organen van 4 verschillende kleuren heeft, wint. Het regenboog-orgaan telt als elke kleur.', 'wygrywa ten, kto pierwszy ma 4 zdrowe organy w 4 różnych kolorach. Tęczowy organ liczy się jako każdy kolor.', 'the first to have 4 healthy organs in 4 different colours wins. The rainbow organ counts as any colour.'],
  ['wie het eerst 4 gezonde organen van 4 verschillende kleuren heeft, wint. Het regenboog-orgaan telt als elke kleur.', 'wygrywa ten, kto pierwszy ma 4 zdrowe organy w 4 różnych kolorach. Tęczowy organ liczy się jako każdy kolor.', 'the first to have 4 healthy organs in 4 different colours wins. The rainbow organ counts as any colour.'],
  ['Je beurt:', 'Twoja kolej:', 'Your turn:'],
  ['speel één kaart, óf gooi 1 tot 3 kaarten weg. Daarna pak je weer tot je 3 kaarten hebt. Overslaan mag niet.', 'zagraj jedną kartę albo wyrzuć od 1 do 3 kart. Potem dobierasz do 3 kart. Nie można pasować.', "play one card, or throw 1 to 3 cards away. Then draw back up to 3 cards. You can't skip."],
  ['Orgaan:', 'Organ:', 'Organ:'],
  ['leg het bij jezelf. Twee dezelfde organen mag niet.', 'połóż go u siebie. Nie możesz mieć dwóch takich samych.', "put it in your own body. You can't have two of the same."],
  ['Virus:', 'Wirus:', 'Virus:'],
  ['op een orgaan van een ander, zelfde kleur. Eén virus = ziek. Een tweede virus = het orgaan is weg. Op een beschermd orgaan haalt het virus het medicijn weg.', 'na organ innego gracza, ten sam kolor. Jeden wirus = chory. Drugi wirus = organ znika. Na chronionym organie wirus niszczy lekarstwo.', "on another player's organ, same colour. One virus = sick. A second virus = the organ is gone. On a protected organ the virus removes the medicine."],
  ['Medicijn:', 'Lekarstwo:', 'Medicine:'],
  ['op je eigen orgaan, zelfde kleur. Eén medicijn = beschermd. Twee = immuun 🛡️: daar kan niets meer aan. Op een ziek orgaan maakt het medicijn het weer beter.', 'na swój organ, ten sam kolor. Jedno lekarstwo = chroniony. Dwa = odporny 🛡️: nic mu już nie zrobią. Na chorym organie lekarstwo go leczy.', "on your own organ, same colour. One medicine = protected. Two = immune 🛡️: nothing can touch it. On a sick organ the medicine makes it better."],
  ['Regenboog-kaarten', 'Tęczowe karty', 'Rainbow cards'],
  ['passen bij elke kleur.', 'pasują do każdego koloru.', 'fit every colour.'],
  ['Transplantatie:', 'Przeszczep:', 'Transplant:'],
  ['ruil een orgaan tussen twee spelers.', 'zamień organ między dwoma graczami.', 'swap an organ between two players.'],
  ['Orgaandief:', 'Złodziej organów:', 'Organ thief:'],
  ['pak een orgaan van een ander.', 'zabierz organ innemu graczowi.', "take another player's organ."],
  ['Besmetting:', 'Zarażenie:', 'Contagion:'],
  ['je virussen springen naar vrije organen van anderen.', 'twoje wirusy przeskakują na wolne organy innych.', "your viruses jump to other players' free organs."],
  ['Latex handschoen:', 'Lateksowa rękawiczka:', 'Latex glove:'],
  ['alle anderen gooien hun kaarten weg en slaan een beurt over.', 'wszyscy inni wyrzucają karty i tracą kolejkę.', 'everyone else throws their cards away and misses a turn.'],
  ['Medische fout:', 'Błąd lekarski:', 'Medical error:'],
  ['ruil je hele lichaam met een ander. Immuun 🛡️ kan niet geruild of gestolen worden (behalve bij medische fout), en je mag nooit twee dezelfde organen krijgen.', 'zamień się całym ciałem z innym graczem. Odpornego 🛡️ organu nie można zamienić ani ukraść (oprócz błędu lekarskiego) i nigdy nie możesz mieć dwóch takich samych organów.', "swap your whole body with another player. Immune 🛡️ organs can't be swapped or stolen (except by medical error), and you may never get two of the same organ."],

  // --- Mollen meppen ---
  ['🔨 Mollen meppen', '🔨 Uderz kreta', '🔨 Whac-a-mole'],
  ['Mep de mollen, niet het hondje!', 'Uderzaj krety, nie pieska!', 'Whack the moles, not the dog!'],
  ['Wie mept de meeste mollen?', 'Kto uderzy najwięcej kretów?', 'Who whacks the most moles?'],
  ['Hoe snel zijn de mollen?', 'Jak szybkie są krety?', 'How fast are the moles?'],
  ['Mep de mollen! Niet het hondje!', 'Uderzaj krety! Nie pieska!', 'Whack the moles! Not the dog!'],
  ['⏱️ {0} seconden · {1} punten', '⏱️ {0} s · {1} {1|punkt|punkty|punktów}', '⏱️ {0} seconds · {1} points'],
  ['Au! Woef! −3', 'Au! Hau! −3', 'Ouch! Woof! −3'],

  // --- Sudoku ---
  ['🧩 Sudoku', '🧩 Sudoku', '🧩 Sudoku'],
  ['Cijferpuzzel in 4 levels', 'Łamigłówka liczbowa, 4 poziomy', 'Number puzzle in 4 levels'],
  ['Hoe moeilijk?', 'Jak trudno?', 'How hard?'],
  ['▶️ Verder spelen', '▶️ Graj dalej', '▶️ Continue'],
  ['Nog geen record', 'Jeszcze bez rekordu', 'No record yet'],
  ['↩️ Terug', '↩️ Cofnij', '↩️ Undo'],
  ['🧽 Gum', '🧽 Gumka', '🧽 Erase'],
  ['✏️ Notities', '✏️ Notatki', '✏️ Notes'],
  ['💡 Hint', '💡 Podpowiedź', '💡 Hint'],
  ['💪 Nog een kans', '💪 Jeszcze jedna szansa', '💪 One more chance'],
  ['Fouten: {0}/{1}', 'Błędy: {0}/{1}', 'Mistakes: {0}/{1}'],
  ['Tik op een vakje en kies een cijfer.', 'Stuknij pole i wybierz cyfrę.', 'Tap a square and choose a number.'],
  ['Dat cijfer past daar niet.', 'Ta cyfra tu nie pasuje.', "That number doesn't fit there."],
  ['{0} fouten: het spel is voorbij.', '{0} błędy: koniec gry.', '{0} mistakes: game over.'],
  ['Opgelost in {0}!', 'Rozwiązane w {0}!', 'Solved in {0}!'],
  ['Nieuw record!', 'Nowy rekord!', 'New record!'],
  ['Nieuw spel', 'Nowa gra', 'New game'],
  ['Nog een kans', 'Jeszcze jedna szansa', 'One more chance'],
  ['Verder spelen', 'Graj dalej', 'Continue'],
  ['Fouten', 'Błędy', 'Mistakes'],
  ['Ongedaan maken', 'Cofnij', 'Undo'],
  ['Gum', 'Gumka', 'Erase'],
  ['Hint', 'Podpowiedź', 'Hint'],
  ['Notities', 'Notatki', 'Notes'],
  ['Makkelijk', 'Łatwy', 'Easy'],
  ['Gemiddeld', 'Średni', 'Medium'],
  ['Meester', 'Mistrz', 'Master'],
  ['🏆 Nieuw record!', '🏆 Nowy rekord!', '🏆 New record!'],

  // --- Nagelsalon ---
  ['💅 Welkom in de nagelsalon!', '💅 Witaj w salonie paznokci!', '💅 Welcome to the nail salon!'],
  ['🎨 Vrij spelen', '🎨 Swobodna zabawa', '🎨 Free play'],
  ['Maak de mooiste nagels en bewaar een foto', 'Zrób najpiękniejsze paznokcie i zapisz zdjęcie', 'Make the prettiest nails and save a photo'],
  ['👧 Klanten', '👧 Klientki', '👧 Customers'],
  ['Maak de nagels zoals de klant wil en verdien sterren', 'Zrób paznokcie tak, jak chce klientka, i zdobywaj gwiazdki', 'Do the nails the way the customer wants and earn stars'],
  ['Verzorgen', 'Pielęgnacja', 'Care'],
  ['Vorm', 'Kształt', 'Shape'],
  ['Lak', 'Lakier', 'Polish'],
  ['Patroon', 'Wzór', 'Pattern'],
  ['Tekenen', 'Rysowanie', 'Drawing'],
  ['Stickers', 'Naklejki', 'Stickers'],
  ['Sieraden', 'Biżuteria', 'Jewellery'],
  ['Eraf', 'Zmyj', 'Remove'],
  ['🔍 Inzoomen', '🔍 Powiększ', '🔍 Zoom in'],
  ['🔍 Uitzoomen', '🔍 Pomniejsz', '🔍 Zoom out'],
  ['🖐️ Alle nagels', '🖐️ Wszystkie paznokcie', '🖐️ All nails'],
  ['✨ Klaar!', '✨ Gotowe!', '✨ Done!'],
  ['🔍 Tik op een nagel', '🔍 Stuknij paznokieć', '🔍 Tap a nail'],
  ['Hoi {0}! Kies wat je wilt doen en tik op een nageltje.', 'Cześć {0}! Wybierz, co chcesz zrobić, i stuknij paznokieć.', 'Hi {0}! Choose what to do and tap a nail.'],
  ['Hoi jij! Kies wat je wilt doen en tik op een nageltje.', 'Cześć! Wybierz, co chcesz zrobić, i stuknij paznokieć.', 'Hi! Choose what to do and tap a nail.'],
  ['Hoi! Ik ben {0}. Mag ik', 'Cześć! Jestem {0}. Czy mogę prosić o paznokcie w kolorze:', "Hi! I'm {0}. May I have"],
  ['nagels met', '— wzór:', 'nails with'],
  ['sticker? En eerst mooi verzorgen graag!', '? I najpierw ładna pielęgnacja, proszę!', 'sticker? And nice care first, please!'],
  ['en een {0} sticker? En eerst mooi verzorgen graag!', 'i naklejkę {0}? I najpierw ładna pielęgnacja, proszę!', 'and a {0} sticker? And nice care first, please!'],
  ['Wauw, precies zoals ik wilde! Dank je wel!', 'Wow, dokładnie tak, jak chciałam! Dziękuję!', 'Wow, exactly what I wanted! Thank you!'],
  ['Mooi! Maar {0}.', 'Ładnie! Ale {0}.', 'Pretty! But {0}.'],
  ['de nagels waren nog niet helemaal verzorgd', 'paznokcie nie były jeszcze zadbane', "the nails weren't fully cared for yet"],
  ['ik wilde {0} nagels', 'chciałam kolor: {0}', 'I wanted {0} nails'],
  ['met {0}', 'z wzorem: {0}', 'with {0}'],
  ['ik miste mijn {0}', 'brakowało mi {0}', 'I missed my {0}'],
  ['Klanten: {0} · sterren: {1}', 'Klientki: {0} · gwiazdki: {1}', 'Customers: {0} · stars: {1}'],
  ['Volgende klant 👋', 'Następna klientka 👋', 'Next customer 👋'],
  ['📸 Je foto is klaar!', '📸 Twoje zdjęcie jest gotowe!', '📸 Your photo is ready!'],
  ['Houd je vinger op de foto en kies', 'Przytrzymaj palec na zdjęciu i wybierz', 'Hold your finger on the photo and choose'],
  ["Bewaar in Foto's", 'Zachowaj w Zdjęciach', 'Save to Photos'],
  ['Bewaren of delen', 'Zachowaj albo udostępnij', 'Save or share'],
  ['💅 De nagels van {0}', '💅 Paznokcie: {0}', "💅 {0}'s nails"],
  ['💅 De nagels van mij', '💅 Moje paznokcie', '💅 My nails'],
  ['🖌️ Teken met je vinger op een nagel. Tip: zoom eerst in!', '🖌️ Rysuj palcem na paznokciu. Podpowiedź: najpierw powiększ!', '🖌️ Draw on a nail with your finger. Tip: zoom in first!'],
  ['💍 Kies een ring en tik op een nagel. Tik nog eens om hem af te doen.', '💍 Wybierz pierścionek i stuknij paznokieć. Stuknij jeszcze raz, żeby go zdjąć.', '💍 Pick a ring and tap a nail. Tap again to take it off.'],
  ['🫧 Tik op een nagel: lak, patroon, tekening en stickers gaan eraf.', '🫧 Stuknij paznokieć: lakier, wzór, rysunek i naklejki znikną.', '🫧 Tap a nail: polish, pattern, drawing and stickers come off.'],
  ['vijl', 'pilnik', 'file'],
  ['spons', 'gąbka', 'sponge'],
  // colours (bottle labels) and how a customer says them
  ['rood', 'czerwony', 'red'], ['roze', 'różowy', 'pink'], ['lichtroze', 'jasnoróżowy', 'light pink'], ['paars', 'fioletowy', 'purple'],
  ['lila', 'liliowy', 'lilac'], ['blauw', 'niebieski', 'blue'], ['lichtblauw', 'błękitny', 'light blue'], ['mint', 'miętowy', 'mint'],
  ['groen', 'zielony', 'green'], ['geel', 'żółty', 'yellow'], ['oranje', 'pomarańczowy', 'orange'], ['goud', 'złoty', 'gold'],
  ['zwart', 'czarny', 'black'], ['wit', 'biały', 'white'],
  ['rode', 'czerwony', 'red'], ['paarse', 'fioletowy', 'purple'], ['blauwe', 'niebieski', 'blue'],
  ['lichtblauwe', 'błękitny', 'light blue'], ['mintgroene', 'miętowy', 'mint green'], ['groene', 'zielony', 'green'], ['gele', 'żółty', 'yellow'],
  ['gouden', 'złoty', 'golden'], ['zwarte', 'czarny', 'black'],
  // patterns, finishes, shapes, lengths, jewellery
  ['geen', 'brak', 'none'], ['streepjes', 'paski', 'stripes'], ['stippen', 'kropki', 'dots'], ['regenboog', 'tęcza', 'rainbow'],
  ['glitter', 'brokat', 'glitter'], ['roze glitter', 'różowy brokat', 'pink glitter'], ['zilver glitter', 'srebrny brokat', 'silver glitter'],
  ['wit puntje', 'biała końcówka', 'white tip'], ['een wit puntje', 'biała końcówka', 'a white tip'],
  ['hartjes', 'serduszka', 'hearts'], ['sterretjes', 'gwiazdki', 'stars'], ['bloemetjes', 'kwiatki', 'flowers'],
  ['luipaard', 'panterka', 'leopard'], ['marmer', 'marmur', 'marble'],
  ['glans', 'połysk', 'gloss'], ['mat', 'mat', 'matte'], ['metallic', 'metaliczny', 'metallic'], ['overloop', 'ombre', 'ombre'],
  ['rond', 'okrągły', 'round'], ['ovaal', 'owalny', 'oval'], ['amandel', 'migdałowy', 'almond'], ['vierkant', 'kwadratowy', 'square'], ['puntig', 'szpiczasty', 'pointy'],
  ['lang', 'długie', 'long'], ['dun', 'cienki', 'thin'], ['dik', 'gruby', 'thick'],
  ['ring goud', 'pierścionek złoty', 'gold ring'], ['ring zilver', 'pierścionek srebrny', 'silver ring'], ['ring rosé', 'pierścionek różowe złoto', 'rose gold ring'],
  ['armband parels', 'bransoletka z pereł', 'pearl bracelet'], ['armband goud', 'złota bransoletka', 'gold bracelet'], ['armband bedeltjes', 'bransoletka z zawieszkami', 'charm bracelet'],
];

// --- The translator. Dutch (the games' own language) leaves the page untouched. For Polish or English every text the
// page shows — on screen, in buttons and on the drawing boards — is looked up in the list above and swapped.
(function () {
  const LANGS = { nl: 0, pl: 1, en: 2 };
  let lang = 'nl';
  try { lang = localStorage.getItem('taal') || 'nl'; } catch (e) {}
  if (!(lang in LANGS)) lang = 'nl';
  window.LANG = lang;
  document.documentElement.lang = lang;

  // The flags on the welcome screen; choosing one starts the games again in that language
  document.addEventListener('DOMContentLoaded', () => {
    const v = document.getElementById('version'); if (!v) return;
    const box = document.createElement('div'); box.className = 'lang-pick';
    for (const [code, flag, label] of [['nl', '🇳🇱', 'Nederlands'], ['pl', '🇵🇱', 'Polski'], ['en', '🇬🇧', 'English']]) {
      const b = document.createElement('button'); b.type = 'button'; b.dataset.notr = '1';
      b.textContent = flag + ' ' + label; if (code === lang) b.className = 'on';
      b.onclick = () => { try { localStorage.setItem('taal', code); } catch (e) {} location.reload(); };
      box.appendChild(b);
    }
    v.before(box);
    const st = document.createElement('style');
    st.textContent = '.lang-pick{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:18px 0 4px}' +
      '.lang-pick button{font:inherit;font-size:15px;padding:6px 12px;border-radius:999px;border:2px solid #f3d9c4;background:#fff;color:#7a5a48;cursor:pointer}' +
      '.lang-pick button.on{border-color:#e98fb0;background:#ffe3ee;font-weight:700}';
    document.head.appendChild(st);
  });
  if (lang === 'nl') return;

  const col = LANGS[lang], exact = new Map(), patterns = [];
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const row of window.LANG_TEXTS) {
    const nl = row[0], to = row[col];
    if (!to) continue;
    if (!/\{\d\}/.test(nl)) { if (!exact.has(nl)) exact.set(nl, to); continue; }
    // A text with blanks becomes a pattern; a blank between two blanks (a list of names) may not hold spaces
    const loose = !/^\{\d\}/.test(nl) || !/\{\d\}$/.test(nl);
    const order = [];
    const src = nl.split(/(\{\d\})/).map(part => {
      const m = part.match(/^\{(\d)\}$/);
      if (!m) return esc(part);
      order.push(+m[1]); return loose ? '(.+?)' : '(\\S+?)';
    }).join('');
    patterns.push({ re: new RegExp('^' + src + '$', 's'), order, to, weight: nl.replace(/\{\d\}/g, '').length });
  }
  patterns.sort((a, b) => b.weight - a.weight);

  // Polish says 1 kamień, 2–4 kamienie, 5+ kamieni (and 12–14 kamieni)
  const plural = (n, one, few, many) => {
    n = Math.abs(parseInt(n, 10)); if (isNaN(n)) return many;
    if (n === 1) return one;
    return n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? few : many;
  };
  const cache = new Map();
  function tr(core) {
    if (exact.has(core)) return exact.get(core);
    if (cache.has(core)) return cache.get(core);
    let out = core;
    for (const p of patterns) {
      const m = core.match(p.re); if (!m) continue;
      if (m.slice(1).some(a => /[.!?…✨🎉] /u.test(a))) continue;    // a blank holds a name or number, never the end of a sentence
      const args = [];
      p.order.forEach((n, i) => { args[n] = m[i + 1]; });
      out = p.to
        .replace(/\{(\d)\|([^|}]*)\|([^|}]*)\|([^|}]*)\}/g, (_, n, a, b, c) => plural(args[n], a, b, c))
        .replace(/\{(\d)\}/g, (_, n) => { const a = args[n] ?? ''; return translate(a); });
      break;
    }
    // Not found whole: the games often glue sentences together ("… ✨ Jij bent aan de beurt!"), so try the pieces
    // (best: a cut where both parts are known, so "Au! 3 meter en 2 💎." is not cut after "Au!"; else a cut where one part is)
    if (out === core) {
      const cuts = [];
      for (let i = 1; i < core.length - 1; i++) if (core[i] === ' ' && /[.!?…✨🎉⬆️⬇️]$/u.test(core.slice(0, i))) cuts.push(i);
      const known = i => [tr(core.slice(0, i)) !== core.slice(0, i), tr(core.slice(i + 1)) !== core.slice(i + 1)];
      const at = cuts.find(i => known(i).every(Boolean)) ?? cuts.find(i => known(i).some(Boolean));
      if (at !== undefined) out = tr(core.slice(0, at)) + ' ' + tr(core.slice(at + 1));
    }
    if (cache.size > 3000) cache.clear();
    cache.set(core, out);
    return out;
  }
  // Keeps the spaces around a text, so sentences built from pieces still read right
  function translate(s) {
    if (!s || !/[A-Za-zÀ-ž]/.test(s)) return s;
    const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const t = tr(m[2]);
    return t === m[2] ? s : m[1] + t + m[3];
  }
  window.t = translate;

  const ATTRS = ['placeholder', 'title', 'aria-label'];
  function fix(node) {
    if (node.nodeType === 3) {
      const p = node.parentNode;
      if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE' || (p.dataset && p.dataset.notr)) return;
      const v = node.nodeValue, t = translate(v);
      if (t !== v) node.nodeValue = t;
    } else if (node.nodeType === 1) {
      if (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE' || node.dataset.notr) return;
      for (const a of ATTRS) if (node.hasAttribute(a)) {
        const v = node.getAttribute(a), t = translate(v);
        if (t !== v) node.setAttribute(a, t);
      }
      for (const c of node.childNodes) fix(c);
    }
  }
  new MutationObserver(list => {
    for (const r of list) {
      if (r.type === 'characterData') fix(r.target);
      else if (r.type === 'attributes') fix(r.target);
      else for (const n of r.addedNodes) fix(n);
    }
  }).observe(document.documentElement, { childList: true, characterData: true, attributes: true, attributeFilter: ATTRS, subtree: true });
  document.addEventListener('DOMContentLoaded', () => fix(document.body));

  // Texts drawn on the game boards
  const C = CanvasRenderingContext2D.prototype;
  for (const name of ['fillText', 'strokeText', 'measureText']) {
    const orig = C[name];
    C[name] = function (text, ...rest) { return orig.call(this, typeof text === 'string' ? translate(text) : text, ...rest); };
  }
})();
