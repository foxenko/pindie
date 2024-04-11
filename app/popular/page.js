"use client";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  return (
    <main className="main-inner">
      {popularGames ? (
        <CardsListSection id="popular" title="Популярные" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
