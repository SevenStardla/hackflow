import { Team } from "../types"
import { Submission } from "../types"

const STORAGE_KEYS = {
  TEAMS: "hackflow_teams",
  SUBMISSIONS: "hackflow_submissions"
}

export function getTeams(): Team[] {

  if (typeof window === "undefined") return []

  const data = localStorage.getItem(STORAGE_KEYS.TEAMS)

  return data ? JSON.parse(data) : []

}

export function saveTeams(teams: Team[]) {

  localStorage.setItem(
    STORAGE_KEYS.TEAMS,
    JSON.stringify(teams)
  )

}

export function getSubmissions(): Submission[] {

  if (typeof window === "undefined") return []

  const data = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS)

  return data ? JSON.parse(data) : []

}

export function saveSubmissions(submissions: Submission[]) {

  localStorage.setItem(
    STORAGE_KEYS.SUBMISSIONS,
    JSON.stringify(submissions)
  )

}