import Link from "next/link"
import HackathonStatus, { HackathonStatusType } from "./HackathonStatus"


type Props = {
  hackathon: {
    slug: string
    title: string
    status: HackathonStatusType
    tags: string[]
  }
}

export default function HackathonCard({ hackathon }: Props) {

  return (

    <div className="bg-white p-6 rounded-lg shadow">

      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
      {hackathon.title}
      <HackathonStatus status={hackathon.status}/>
      </h3>

      <div className="flex gap-2 mb-4">

        {hackathon.tags.map(tag => (
          <span
          key={tag}
          className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}

      </div>

      <Link href={`/hackathons/${hackathon.slug}`}>
        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          보기
        </button>
      </Link>

    </div>
  )
}