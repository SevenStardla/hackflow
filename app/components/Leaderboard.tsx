"use client"

import { getTeams } from "../utils/storage"
import { getSubmissions } from "../utils/storage"

type Props = {
  hackathonSlug: string
}

export default function Leaderboard({hackathonSlug}:Props) {

  const teams = getTeams()
  const submissions = getSubmissions().filter(
  s => s.hackathonSlug === hackathonSlug
)

  const leaderboard = submissions
  .map(sub => {

    const team = teams.find(t => t.id === sub.teamId)

    return {
      teamName: team?.name ?? "Unknown",
      plan: sub.plan,
      web: sub.web,
      pdf: sub.pdf,
      submittedAt: sub.submittedAt
    }

  })
  .sort((a,b)=>{

    return new Date(a.submittedAt).getTime()
      - new Date(b.submittedAt).getTime()

  })

  return (

    <div>

      <h2 className="text-xl font-semibold mb-4">
        Leaderboard
      </h2>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-100">

            <th className="border p-2">Rank</th>
            <th className="border p-2">Team</th>
            <th className="border p-2">Plan</th>
            <th className="border p-2">Web</th>
            <th className="border p-2">PDF</th>
            <th className="border p-2">Submitted</th>

          </tr>
        </thead>

        <tbody>

          {leaderboard.map((entry,i)=>(

            <tr key={i}>

              <td className="border p-2">{i+1}</td>

              <td className="border p-2">
                {entry.teamName}
              </td>

              <td className="border p-2">
              <a
                href={entry.plan}
                target="_blank"
                className="text-blue-500 underline">보기</a>
              </td>

              <td className="border p-2">
              <a
                href={entry.web}
                target="_blank"
                className="text-blue-500 underline">보기</a>
              </td>

              <td className="border p-2">
              <a
                href={entry.pdf}
                target="_blank"
                className="text-blue-500 underline">보기</a>
              </td>

              <td className="border p-2">
                {new Date(entry.submittedAt).toLocaleString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}