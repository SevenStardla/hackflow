"use client"

import { useParams } from "next/navigation"
import { hackathons } from "../../data/hackathons"
import SubmitForm from "../../components/SubmitForm"
import { getTeams } from "../../utils/storage"
import Tabs from "../../components/Tabs"
import Leaderboard from "../../components/Leaderboard"
import { hackathonDetails } from "../../data/hackathonDetails"
import Countdown from "../../components/Countdown"
import { Team } from "../../types"
import { useState } from "react"

export default function HackathonDetail() {


  const params = useParams()
  const slug = params.slug
  const detail = hackathonDetails[slug as keyof typeof hackathonDetails]
  const deadline = detail?.deadline
  const hackathon = hackathons.find(h => h.slug === slug)
  const [teams] = useState<Team[]>(() => {
  if (typeof window === "undefined") return []
  return getTeams()
})

  if (!hackathon) {
    return <div className="p-10">Not Found</div>
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "teams", label: "Teams" },
    { id: "eval", label: "Eval" },
    { id: "prize", label: "Prize" },
    { id: "info", label: "Info" },
    { id: "schedule", label: "Schedule" },
    { id: "submit", label: "Submit" },
    { id: "leaderboard", label: "Leaderboard" }
  ]

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-6">
        {hackathon.title}
      </h1>
          {deadline && (

    <div className="mt-2">

      <p className="text-sm text-gray-500">
      Submission Deadline
      </p>

      <Countdown deadline={deadline}/>

    </div>

    )}
      <Tabs tabs={tabs}>

        {(activeTab) => {

          if (activeTab === "overview") {
            return (
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  해커톤 소개
                </h2>
                <p>{detail?.overview.summary}</p>
                <p className="text-sm text-gray-500">
                  최대 팀 인원: {detail?.overview.maxTeamSize}
                </p>
              </div>
            )
          }

          if (activeTab === "teams") {

  const filteredTeams = teams.filter(
    team => team.hackathonSlug === hackathon.slug
  )

  return (
    <div>

      <h2 className="text-xl font-semibold mb-4">
        팀 목록 ({filteredTeams.length})
      </h2>

      {filteredTeams.length === 0 && (
        <p>현재 등록된 팀이 없습니다.</p>
      )}

      {filteredTeams.map(team => (

        <div
          key={team.id}
          className="border rounded-lg p-4 mb-4 shadow"
        >

          <h3 className="font-semibold text-lg">
            {team.name}
          </h3>

          <p className="text-sm text-gray-600">
            {team.intro}
          </p>

          <a
            href={team.contact}
            target="_blank"
            className="text-blue-500 text-sm"
          >
            연락하기
          </a>

        </div>

      ))}

    </div>
  )
}

          if (activeTab === "eval") {
            return (
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  평가 기준
                </h2>
                <p>{detail?.eval.metricName}</p>
                <p>{detail?.eval.description}</p>
              </div>
            )
          }

          if (activeTab === "prize") {
            return (
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  상금
                </h2>
                <ul>
                  <ul>
                    {detail?.prize.map(prize => (
                      <li key={prize.place}>
                        {prize.place}: {prize.amount}
                      </li>
                    ))}
                    </ul>
                </ul>
              </div>
            )
          }

          if (activeTab === "info") {
            return (
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  안내
                </h2>
                <p>규정과 FAQ를 확인하세요.</p>
              </div>
            )
          }

          if (activeTab === "schedule") {
            return (
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  일정
                </h2>
                <ul className="space-y-2">
                  <ul>
                  {detail?.schedule.map(item => (
                    <li key={item.name}>
                      {item.name}: {item.date}
                    </li>
                  ))}
                  </ul>
                </ul>
              </div>
            )
          }

          if (activeTab === "submit") {

          if(hackathon.status !== "ongoing"){

            return(

              <p className="text-gray-500">
                현재 제출할 수 없는 해커톤입니다.
              </p>

            )

          }

          return(

            <SubmitForm
              teams={teams}
              hackathonSlug={slug as string}
            />

          )

        }

          if (activeTab === "leaderboard") {
            return (
              <Leaderboard hackathonSlug={slug as string} />
            )
          }

        }}

      </Tabs>

    </div>

  )
}