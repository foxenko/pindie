"use client";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return (
    <main className="main-inner">
      {newGames ? (
        <CardsListSection id="new" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
