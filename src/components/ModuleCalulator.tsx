"use client"

import { Module } from "@/utils/types"
import { useState } from "react"

export default function ModuleCalculator({ module }: { module: Module }) {
  const [examNote, setExamNote] = useState(module.exam)

  return (
    <tr key={module.id} className="even:bg-gray-50">
      {/* Name */}
      <td className="border-b border-gray-300 py-2 px-4 font-semibold text-gray-800">
        {module.name || "N/A"}
      </td>

      <td className="border-b border-gray-300 py-2 px-4">
        <div className="flex gap-4">
          {module.CC?.TD !== undefined && (
            <div className="flex-1 bg-purple-400 rounded-md py-1 px-2">
              <span className="font-semibold">TD:</span> {module.CC.TD ?? "N/A"}
            </div>
          )}
          {module.CC?.TP !== undefined && (
            <div className="flex-1 bg-green-400 rounded-md py-1 px-2">
              <span className="font-semibold">TP:</span> {module.CC.TP ?? "N/A"}
            </div>
          )}
        </div>
      </td>

      {/* Exam */}
      <td className="border-b border-gray-300 py-2 px-4 text-center">
        <input
          value={examNote}
          onChange={(event) => {
            const input = Number(event.target.value)
            if (input >= 0 && input <= 20)
              setExamNote(Number(event.target.value))
          }}
        />
      </td>
    </tr>
  )
}
