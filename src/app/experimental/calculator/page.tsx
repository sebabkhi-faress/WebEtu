import { Metadata } from "next"
import { getExamsNotes, getNormalNotes, getDias } from "@/utils/api/panel"
import { Module } from "@/utils/types"
import ModuleCalculator from "@/components/ModuleCalulator"

export const metadata: Metadata = {
  title: "WebEtu - Calculator",
  description: "Calculator",
}

export default async function Calculator() {
  const dias = await getDias()
  const currentYear = process.env.CURRENT_YEAR
  const user_year = dias[0].anneeAcademiqueId
  const user_id = dias[0].id

  // if (currentYear?.toString() !== user_year.toString()) {
  //   return (
  //     <div>
  //       <h1>this feature is not available for you!</h1>
  //     </div>
  //   )
  // }

  const examsNotes = (await getExamsNotes(user_id)) as any
  const normalNotes = (await getNormalNotes(user_id)) as any

  const modules = examsNotes?.firstSemExams.normal.map((module: any) => {
    return {
      id: module.rattachementMcId,
      name: module.mcLibelleFr,
      exam: module.noteExamen,
    }
  })

  for (let i = 0; i < normalNotes?.firstSemNotes.length; i++) {
    let current = normalNotes.firstSemNotes[i]
    let index = modules.findIndex(
      (module: any) => module.name == current.rattachementMcMcLibelleFr,
    )

    if (index && !modules[index]["CC"]) modules[index]["CC"] = {}

    modules[index]["CC"] = {
      ...modules[index]["CC"],
      [current.apCode]: current.note,
    }
  }

  if (!examsNotes && !normalNotes) {
    return (
      <div>
        <h1>this is beyond me man sorry</h1>
      </div>
    )
  }

  const data = modules

  return (
    <div className="max-w-full overflow-x-auto bg-gray-100 p-4 rounded border border-gray-300">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="py-2 px-4 border-r border-gray-200">Module Name</th>
            <th className="py-2 px-4 border-r border-gray-200">CC</th>
            <th className="py-2 px-4">Exam</th>
          </tr>
        </thead>
        <tbody>
          {data.map((module: Module) => (
            <ModuleCalculator key={module.id} module={module} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
