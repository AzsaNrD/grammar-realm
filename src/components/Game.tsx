"use client";

import { GameProvider, useGame } from "@/context/GameContext";
import BgmPlayer from "./BgmPlayer";
import DialogueBox from "./DialogueBox";
import IntroScreen from "./screens/IntroScreen";
import MapScreen from "./screens/MapScreen";
import RegionScreen from "./screens/RegionScreen";
import BattleScreen from "./screens/BattleScreen";
import GuildExamScreen from "./screens/GuildExamScreen";
import ResultScreen from "./screens/ResultScreen";
import EndingScreen from "./screens/EndingScreen";

function CurrentScreen() {
  const { state } = useGame();

  if (!state.loaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink">
        <p className="animate-pulse text-lg text-parchment">Memuat dunia...</p>
      </div>
    );
  }

  switch (state.screen) {
    case "intro":
      return <IntroScreen />;
    case "map":
      return <MapScreen />;
    case "region":
      return <RegionScreen />;
    case "battle":
      return <BattleScreen />;
    case "guildExam":
      return <GuildExamScreen />;
    case "result":
      return <ResultScreen />;
    case "ending":
      return <EndingScreen />;
  }
}

export default function Game() {
  return (
    <GameProvider>
      <CurrentScreen />
      <DialogueBox />
      <BgmPlayer />
    </GameProvider>
  );
}
