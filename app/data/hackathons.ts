import { HackathonStatusType } from "../components/HackathonStatus"

export type Hackathon = {
  slug: string
  title: string
  status: HackathonStatusType
  tags: string[]
}



export const hackathons: Hackathon[] = [
  {
    slug: "aimers-8-model-lite",
    title: "Aimers 8기 모델 경량화 해커톤",
    status: "ongoing",
    tags: ["LLM", "Compression"]
  },
]