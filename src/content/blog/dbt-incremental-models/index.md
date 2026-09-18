---
title: "dbt incremental models: kiedy używać i jak z nich korzystać"
description: "Praktyczny przewodnik po modelach incremental w dbt z naciskiem na wydajność, jakość danych i utrzymywalność pipeline'ów."
date: 2024-01-12
category: dane
tags: ["dbt", "SQL", "Data Engineering", "ELT"]
cover: "./cover.svg"
featured: true
draft: false
---

W modelach incremental w dbt największą wartość daje sensowne ograniczanie zakresu przetwarzania danych. Zamiast przeliczać cały zestaw danych przy każdej aktualizacji, warto odświeżać tylko nowe lub zmienione rekordy.

## Dlaczego incremental?

To podejście pomaga w:

- ograniczeniu czasu uruchamiania jobów,
- redukcji kosztów obliczeniowych,
- poprawie wydajności warstw martwych i codziennych,
- łatwiejszym utrzymaniu pipeline'ów w środowisku produkcyjnym.

## Typowy pattern

```sql
{{ config(materialized='incremental', unique_key='order_id') }}

select
    order_id,
    customer_id,
    created_at,
    total_amount
from {{ source('raw', 'orders') }}

{% if is_incremental() %}
where created_at > (select max(created_at) from {{ this }})
{% endif %}
```

## Dobre praktyki

1. Dobierz `unique_key` zgodnie z logiką biznesową.
2. Zawsze myśl o identyfikacji zmian, nie tylko o nowych rekordach.
3. Monitoruj rozmiar danych i czas wykonania modelu.
4. Testuj pełny refresh na danych referencyjnych.

> W praktyce incremental jest świetny, ale nie zastępuje dobrej architektury modelu. Najpierw zdefiniuj warstwę źródłową, potem warstwę martwą, a dopiero później logikę businessową.

## Podsumowanie

dbt incremental to nie tylko optymalizacja. To podejście, które wspiera skalowalność i kontrolę jakości danych w coraz większych pipeline'ach.
