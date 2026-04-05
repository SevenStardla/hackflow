// import Link from "next/link"
// import { hackathons } from "../data/hackathons"

// export default function Hackathons() {

//   return (
//     <div style={{ padding: 40 }}>
//       <h1>해커톤 목록</h1>

//       {hackathons.map((h) => (
//         <div key={h.slug} style={{ border: "1px solid #ccc", padding: 20, marginBottom: 10 }}>
//           <h3>{h.title}</h3>
//           <p>Status: {h.status}</p>

//           <Link href={`/hackathons/${h.slug}`}>
//             <button>보기</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { hackathons } from "../data/hackathons"
import HackathonCard from "../components/HackathonCard"

export default function Hackathons() {
  const [search,setSearch] = useState("")
  const filteredHackathons = hackathons.filter(h => {

  const text = search.toLowerCase()

  return (
    h.title.toLowerCase().includes(text) ||
    h.tags.some(tag =>
      tag.toLowerCase().includes(text)
    )

  )

})
  return (

    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">
        해커톤 목록
      </h1>
        <input
  placeholder="해커톤 검색"
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  className="border p-2 mb-6 w-full"
/>
{filteredHackathons.length === 0 && (

  <p className="text-gray-500">
    검색 결과가 없습니다
  </p>

)}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {hackathons.map(h => (
          <HackathonCard
            key={h.slug}
            hackathon={h}
          />
        ))}
      </div>
    </div>

  )
}