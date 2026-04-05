"use client"

import { useState } from "react"
import { Team, Submission } from "../types"
import { getSubmissions, saveSubmissions } from "../utils/storage"

type Props = {
  teams: Team[]
  hackathonSlug: string
}

export default function SubmitForm({ teams, hackathonSlug }: Props) {

  const [submitted,setSubmitted] = useState(false)
  const [teamId,setTeamId] = useState("")
  const [plan,setPlan] = useState("")
  const [web,setWeb] = useState("")
  const [pdf,setPdf] = useState("")
  const team = teams.find(t => t.id === teamId)

  function submit(){

    if(!teamId) return alert("팀을 선택하세요")

    const team = teams.find(t => t.id === teamId)

    const newSubmission = {
      teamId,
      teamName: team?.name,
      hackathonSlug,
      plan,
      web,
      pdf,
      submittedAt: new Date().toISOString()
    }

    const submissions = getSubmissions()

    const existingIndex = submissions.findIndex(
    s =>
        s.teamId === teamId &&
        s.hackathonSlug === hackathonSlug
    )

    let next

    if(existingIndex !== -1){

      const updated = [...submissions]
      updated[existingIndex] = newSubmission
      next = updated

    }else{

      next = [...submissions,newSubmission]

    }

    if(!plan && !web && !pdf){
    alert("하나 이상의 링크를 입력하세요")
    return
    }

    saveSubmissions(next)
    setSubmitted(true)
    alert("제출 완료")

    setPlan("")
    setWeb("")
    setPdf("")

  }

  return (

    <div className="space-y-4">

      <select
        value={teamId}
        onChange={(e)=>{

        const id = e.target.value

        setTeamId(id)

        const submissions = getSubmissions()

        const existing = submissions.find(
        s =>
            s.teamId === id &&
            s.hackathonSlug === hackathonSlug
        )

        setSubmitted(!!existing)

    }}
    className="border p-2 rounded w-full"
    >

        <option value="">팀 선택</option>
        {teams.length === 0 && (
        <p className="text-red-500 mb-3">
          먼저 Teams 탭에서 팀을 생성하세요.
        </p>
)}
        {teams.map(team => (

            <option key={team.id} value={team.id}>
            {team.name}
          </option>

    ))}
      </select>
    {submitted && (

        <p className="text-green-600 text-sm">
        이미 제출된 팀입니다. 다시 제출하면 업데이트됩니다.
        </p>
    )}

      <input
        placeholder="기획서 링크"
        value={plan}
        onChange={(e)=>setPlan(e.target.value)}
        className="border p-2 block w-full rounded"
      />

      <input
        placeholder="웹 링크"
        value={web}
        onChange={(e)=>setWeb(e.target.value)}
        className="border p-2 block w-full rounded"
      />

      <input
        placeholder="PDF 링크"
        value={pdf}
        onChange={(e)=>setPdf(e.target.value)}
        className="border p-2 block w-full rounded"
      />

      <button
        onClick={submit}
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded"
      >
        제출
      </button>

    </div>
  )
}