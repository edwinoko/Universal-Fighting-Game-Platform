"use client"

import React, { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Frame_data_and_more() {
  const [games, setGames] = useState<{ id: string; name: string; description: string }[]>([])
  const [characters, setCharacters] = useState<{ name: string; information?: string }[]>([])
  const [moves, setMoves] = useState<{ name: string }[]>([])
  const [selectedGame, setSelectedGame] = useState<string>("")
  const [selectedCharacter, setSelectedCharacter] = useState<string>("")
  const [selectedMove, setSelectedMove] = useState<string>("")
  const [characterInfo, setCharacterInfo] = useState<string>("")
  const [frameData, setFrameData] = useState<any>(null)

  // Fetch games on mount
  useEffect(() => {
    fetch("http://0.0.0.0:8000/games")
      .then(res => res.json())
      .then(setGames)
  }, [])

  // Fetch characters when game changes
  useEffect(() => {
    if (selectedGame) {
      fetch(`http://localhost:8000/characters?game=${selectedGame}`)
        .then(res => res.json())
        .then(data => {
          setCharacters(data)
          setSelectedCharacter("")
          setMoves([])
          setSelectedMove("")
          setCharacterInfo("")
        })
    } else {
      setCharacters([])
      setMoves([])
      setSelectedCharacter("")
      setSelectedMove("")
      setCharacterInfo("")
    }
  }, [selectedGame])

  // Fetch moves and character info when character changes
  useEffect(() => {
    if (selectedCharacter) {
      fetch(`http://localhost:8000/moves/character/${selectedCharacter}`)
        .then(res => res.json())
        .then(setMoves)
      // Get info for the selected character
      const char = characters.find(c => c.name === selectedCharacter)
      setCharacterInfo(char?.information || "")
      setSelectedMove("")
      setFrameData(null)
    } else {
      setMoves([])
      setCharacterInfo("")
      setSelectedMove("")
      setFrameData(null)
    }
  }, [selectedCharacter, characters])

  // Fetch frame data when move changes
  useEffect(() => {
    if (selectedCharacter && selectedMove) {
      fetch(`http://localhost:8000/moves/character/${selectedCharacter}`)
        .then(res => res.json())
        .then(data => {
          // Find the move data by name
          const moveData = Array.isArray(data)
            ? data.find((m: any) => m.name === selectedMove)
            : null
          setFrameData(moveData)
        })
    } else {
      setFrameData(null)
    }
  }, [selectedCharacter, selectedMove])

  // Add responsive classes to the main container and sidebar:
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-4 md:p-6 border-b md:border-b-0 md:border-r flex flex-col gap-6 md:gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Select Game</h2>
          <Select onValueChange={setSelectedGame} value={selectedGame}>
            <SelectTrigger>
              <SelectValue placeholder="Game" />
            </SelectTrigger>
            <SelectContent>
              {games.map(game => (
                <SelectItem key={game.id} value={game.id}>
                  {game.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Select Character</h2>
          <Select
            onValueChange={setSelectedCharacter}
            value={selectedCharacter}
            disabled={!selectedGame}
          >
            <SelectTrigger>
              <SelectValue placeholder="Character" />
            </SelectTrigger>
            <SelectContent>
              {characters.map(char => (
                <SelectItem key={char.name} value={char.name}>
                  {char.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Select Move</h2>
          <Select
            onValueChange={setSelectedMove}
            value={selectedMove}
            disabled={!selectedCharacter}
          >
            <SelectTrigger>
              <SelectValue placeholder="Move" />
            </SelectTrigger>
            <SelectContent>
              {moves.map(move => (
                <SelectItem key={move.name} value={move.name}>
                  {move.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 flex flex-col gap-6 md:gap-8">
        {/* Character Info */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedCharacter || "Select a character"}
            </CardTitle>
            <CardDescription>
              {characterInfo || "Character information will appear here."}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Frame Data */}
        <Card>
          <CardHeader>
            <CardTitle>Frame Data</CardTitle>
          </CardHeader>
          <CardContent>
            {frameData ? (
              <div className="flex flex-col md:flex-row gap-6">
                {/* Frame Data Table - take 50% width on md+ screens */}
                <div className="overflow-x-auto flex-1 md:w-1/2">
                  <table className="min-w-full text-left border">
                    <tbody>
                      {Object.entries(frameData)
                        .filter(
                          ([key, value]) =>
                            value !== "--" &&
                            value !== "**" &&
                            value !== null &&
                            value !== undefined &&
                            value !== "" &&
                            key !== "gif_link"
                        )
                        .map(([key, value]) => (
                          <tr key={key} className="border-b">
                            <td className="pr-4 py-2 font-semibold capitalize">{key.replace(/_/g, " ")}</td>
                            <td className="py-2">{String(value)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {/* GIF Display - take 50% width on md+ screens */}
                {frameData.gif_link && (
                  <div className="flex justify-center items-start md:w-1/2 w-full">
                    <img
                      src={`https://ultimateframedata.com/${frameData.gif_link}`}
                      alt="Move GIF"
                      className="rounded shadow max-w-full max-h-[300px] object-contain"
                    />
                  </div>
                )}
              </div>
            ) : (
              <span className="text-gray-500">Select a move to see frame data.</span>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
