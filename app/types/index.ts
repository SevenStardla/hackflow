export type Team = {
  id: string
  hackathonSlug: string
  name: string
  intro: string
  lookingFor: string[]
  contact: string
  createdAt: string
}

export type Submission = {
  teamId: string
  hackathonSlug: string
  plan?: string
  web?: string
  pdf?: string
  submittedAt: string
}

export type LeaderboardEntry = {
  teamName: string
  plan?: string
  web?: string
  pdf?: string
  submittedAt: string
}