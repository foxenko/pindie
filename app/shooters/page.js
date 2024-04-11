"use client";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Shooters() {
  const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

  return (
    <main className="main-inner">
      {shooterGames ? (
        <CardsListSection id="shooters" title="Шутеры" data={shooterGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
