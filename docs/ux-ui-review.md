# Przegląd UX/UI — 17 września 2026

Zakres: strona główna, O mnie, portfolio, lista wpisów, artykuł, kontakt, 404 oraz wspólna nawigacja i stopka. Zachowano paletę i logo DaneDaneTech, statyczny charakter strony oraz istniejące treści blogowe.

## Problemy i wdrożone zmiany

| Problem | Zmiana |
| --- | --- |
| Style kart na stronie głównej nie obejmowały wnętrza komponentów Astro; karty na innych stronach nie miały własnych stylów. | Style przeniesiono do komponentów kart. Ujednolicono odstępy, okładki i tagi. Pojedynczy artykuł ma poziomy układ na większym ekranie. |
| Hero nie wskazywało dalszej drogi, a link „Poznaj mnie” pojawiał się dopiero po najechaniu. | Dodano krótki opis, przyciski portfolio i bloga oraz stale widoczną wskazówkę przejścia do O mnie. |
| Nawigacja na mniejszych ekranach zajmowała dodatkowe wiersze, a jej style również miały problem z zasięgiem. | Style linków znajdują się w HeaderLink; menu ma zwarte odstępy, czytelny stan aktywny i `aria-current`. Mobilny nagłówek przewija się wraz ze stroną. |
| Zbyt duże nagłówki, podwójne marginesy kontenerów i powtórzone etykiety podstron. | Ujednolicono szerokości, skalowanie typografii i hierarchię nagłówków; usunięto powtórzone etykiety. |
| Ikony specjalizacji z CDN nie ładowały się podczas kontroli. | Zastąpiono je dekoracyjnymi ikonami SVG zapisanymi w kodzie strony. |
| Linki do fikcyjnych profili i demo oraz nieklikalny YouTube na stronie kontaktowej. | GitHub prowadzi do znanego profilu GrabarzVIII. Nieuzupełnione kontakty mają jawny komunikat, bez martwych odnośników. Usunięto fikcyjne linki z przykładowego projektu. |
| Style treści Markdown nie docierały do renderowanej zawartości; nagłówki mogły chować się pod nawigacją. | Typografia artykułu jest stylowana globalnie przez `.prose`. Dodano odstęp przewijania, powrót do listy, warunkowy spis treści i lokalne przewijanie szerokich tabel. |
| Daty były po angielsku, a listy tagów miały niepoprawną semantykę. | Daty są po polsku; poprawiono strukturę tagów oraz poziomy nagłówków na listach i stronie O mnie. |
| Interakcje wymagały dopracowania pod klawiaturę i ograniczone animacje. | Wzmocniono focus, powiększono cele dotykowe, dodano obsługę `prefers-reduced-motion` i możliwość ustawienia fokusu na głównej treści. |

## Weryfikacja

- `npm.cmd run typecheck`: 0 błędów, 0 ostrzeżeń, 2 istniejące hints deprecacji `z.string().url()`.
- `npm.cmd run build`: poprawny build 7 stron.
- Kontrola wersji produkcyjnej w Chromium/Edge przez Playwright: 7 widoków × 4 szerokości (320, 390, 768, 1440 px). Brak poziomego przewijania strony, brakujących obrazów i odnośników zawierających adresy placeholderów; jeden H1 w każdym widoku.
- Klawiatura: skip link jest pierwszym elementem; Enter przenosi fokus do `main-content`; wejście do artykułu działa; aktywna nawigacja wskazuje Blog; cel spisu treści nie jest zasłonięty nagłówkiem.
- Obejrzano zrzuty strony głównej, artykułu i kontaktu dla telefonu i desktopu. To kontrola techniczna i wizualna, nie badanie użyteczności z użytkownikami ani pełny audyt WCAG.

## Do uzupełnienia przez właściciela

- Docelowa domena, adres e-mail i profil LinkedIn.
- Prawdziwe projekty w portfolio — obecny wpis nadal wyraźnie oznacza treść przykładową.
- Materiały starterowe bloga pozostawiono w repozytorium. Obecny loader publikuje wyłącznie pliki `**/index.{md,mdx}`, więc luźne pliki starterowe nie pojawiają się na stronie.
