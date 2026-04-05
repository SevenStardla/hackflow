"use client"

import { Team } from "../types"
import { getTeams, saveTeams } from "../utils/storage"
import { useState } from "react"

export default function Camp(){

  const [teams,setTeams] = useState<Team[]>(() => {
  if (typeof window === "undefined") return []
  return getTeams()
  })

  const [name,setName] = useState("")
  const [intro,setIntro] = useState("")
  const [contact,setContact] = useState("")

  function resetForm(){
  setName("")
  setIntro("")
  setContact("")
}
  function createTeam(){

    if(!name || !contact) {
      alert("팀 이름과 연락 링크를 입력하세요")
      return
    }

    const newTeam: Team = {
      id: crypto.randomUUID(),
      hackathonSlug: "aimers-8-model-lite",
      name,
      intro,
      lookingFor: [],
      contact,
      createdAt: new Date().toISOString()
    }

    const next = [...teams,newTeam]

    setTeams(next)
    saveTeams(next)

    resetForm()
  }

  function deleteTeam(id:string){

    const next = teams.filter(team => team.id !== id)

    setTeams(next)
    saveTeams(next)
  }

  return (

    <div style={{maxWidth:600, margin:"auto", padding:40}}>

      <h1 style={{fontSize:24, marginBottom:20}}>
        팀 모집
      </h1>

      <div style={{marginBottom:30}}>

        <input
          placeholder="팀 이름"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{display:"block", marginBottom:10, padding:8, width:"100%"}}
        />

        <input
          placeholder="팀 소개"
          value={intro}
          onChange={(e)=>setIntro(e.target.value)}
          style={{display:"block", marginBottom:10, padding:8, width:"100%"}}
        />

        <input
          placeholder="연락 링크"
          value={contact}
          onChange={(e)=>setContact(e.target.value)}
          style={{display:"block", marginBottom:10, padding:8, width:"100%"}}
        />

      <button
      onClick={createTeam}
      className="bg-blue-500 text-white px-4 py-2 rounded"
      >
      팀 생성
      </button>

      </div>

      <h2 style={{marginBottom:10}}>팀 목록</h2>

      {teams.length === 0 && (
        <p>아직 생성된 팀이 없습니다.</p>
      )}

      {teams.map(team => (

        <div
          key={team.id}
          style={{
            border:"1px solid #ddd",
            padding:15,
            marginBottom:10,
            borderRadius:5
          }}
        >

          <h3>{team.name}</h3>

          <p>{team.intro}</p>

          <a
            href={team.contact}
            target="_blank"
            rel="noopener noreferrer"
          >
            연락하기
          </a>

          <div style={{marginTop:10}}>

          <button
          onClick={() => deleteTeam(team.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
          >
          삭제
          </button>

          </div>

        </div>

      ))}

    </div>

  )
}