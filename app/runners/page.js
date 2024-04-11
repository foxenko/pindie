"use client";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Runners() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main className="main-inner">
      {runnerGames ? (
        <CardsListSection id="runners" title="Ранеры" data={runnerGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
