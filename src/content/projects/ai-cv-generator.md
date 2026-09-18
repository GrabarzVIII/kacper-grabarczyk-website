---
title: "AI CV Generator w n8n"
description: "Prywatny projekt automatyzacji w n8n: CV dopasowane do oferty pracy na podstawie profilu w Markdown, z walidacją struktury i zgodności z faktami."
# Pierwszy dzień miesiąca służy sortowaniu; źródło podaje czerwiec 2026.
date: 2026-06-01
tags: ["Projekt prywatny", "AI automation", "Walidacja danych"]
technologies: ["n8n", "LLM", "Markdown", "Git", "JSON Schema"]
featured: true
featuredOrder: 1
draft: false
---

## Cel projektu

System służy do generowania CV dopasowanego do treści oferty pracy. Źródłem informacji jest profil zawodowy zapisany w plikach Markdown, a n8n koordynuje pracę z plikami, generowanie treści i jej walidację.

To projekt prywatny rozwijany od czerwca 2026 roku. Repozytorium jest prywatne, bez publicznego demo.

## Jak działa

Profil zawodowy zapisany w Markdown stanowi źródło faktów do generowania CV. Reguły walidacji pomagają zachować zgodność treści z doświadczeniem, umiejętnościami i ograniczeniami zapisanymi w profilu.

1. Profil zawodowy jest wersjonowany w Git i udostępniany n8n przez lokalny system plików.
2. Treść oferty pozwala wybrać pasujące doświadczenia, umiejętności i projekty.
3. Model generuje CV w uporządkowanym formacie.
4. Walidacja sprawdza strukturę i zgodność z faktami zapisanymi w profilu.

## Mój wkład

- Koncepcja systemu i konfiguracja środowiska n8n na mikr.us.
- Struktura repozytorium profilu zawodowego.
- Reguły walidacji CV i ograniczania dopisywania niepotwierdzonych informacji.
- Zaplanowanie przepływu wczytywania profilu i generowania CV.

## Dalszy rozwój

PGVector oraz eksport do PDF/DOCX/HTML pozostają kierunkami rozwoju, a nie funkcjami potwierdzonymi jako wdrożone.
