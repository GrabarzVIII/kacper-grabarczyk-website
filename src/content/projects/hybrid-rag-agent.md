---
title: "Hybrydowy agent AI z RAG i Google Drive"
description: "Prywatny agent AI w n8n, który łączy wyszukiwanie wiedzy w Qdrant z odczytem pełnych dokumentów z Google Drive i odsyła do materiałów źródłowych."
# Data techniczna do sortowania; źródło określa wyłącznie rok 2026.
date: 2026-01-01
tags: ["Projekt prywatny", "RAG", "Baza wiedzy"]
technologies: ["n8n", "Qdrant", "Google Drive", "OpenRouter", "OpenAI Embeddings", "Python"]
featured: true
featuredOrder: 2
draft: false
---

## Cel projektu

Agent odpowiada na pytania na podstawie własnej bazy wiedzy przygotowanej z materiałów Markdown. Wyszukiwanie fragmentów przez RAG uzupełnia dostępem do pełnych dokumentów, gdy odpowiedź wymaga szerszego kontekstu.

To projekt prywatny ukończony w 2026 roku. Repozytorium jest prywatne, bez publicznego demo.

## Zasilanie bazy wiedzy

Agent łączy wyszukiwanie wektorowe z odczytem pełnych dokumentów. Proces zasilania obejmuje pobranie plików z Google Drive, odczyt tekstu i metadanych, podział materiałów oraz zapis embeddingów w Qdrant.

- Materiały źródłowe: Markdown i metadane we frontmatterze.
- Orkiestracja: workflow w n8n.
- Odczyt metadanych: Python Code node.
- Embeddingi: OpenAI Embeddings.
- Wyszukiwanie wektorowe: Qdrant.

## Rozmowa i dostęp do źródeł

Workflow czatowy wykorzystuje Chat Trigger i AI Agent w n8n oraz model udostępniany przez OpenRouter. Agent wyszukuje fragmenty wiedzy w Qdrant, a narzędzia Google Drive pozwalają mu znaleźć i odczytać pełny plik. Pamięć rozmowy zachowuje kontekst kolejnych pytań.

## Mój wkład

Przygotowałem architekturę agenta, strukturę materiałów Markdown i podział dokumentów. Zbudowałem workflow zasilania bazy i workflow czatowy oraz skonfigurowałem Google Drive, Qdrant, OpenRouter i OpenAI Embeddings.

## Efekt i dalszy rozwój

Powstał agent, który może wyszukiwać wiedzę, doczytywać źródła i wskazywać materiały do dalszej nauki. Dostęp do źródeł wspiera weryfikację odpowiedzi, ale nie eliminuje wszystkich błędów modelu.

Migracja na lokalny system plików i ewentualne zastąpienie Qdrant przez PostgreSQL z PGVector dotyczą rozwijanej wersji, nie opisywanego wdrożenia.
