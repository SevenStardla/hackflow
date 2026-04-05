// import Link from "next/link"

// export default function Home() {
//   return (
//     <main style={{ padding: 40 }}>
//       <h1>HackFlow</h1>
//       <p>해커톤 탐색부터 팀 빌딩, 제출, 리더보드까지</p>

//       <div style={{ marginTop: 20 }}>
//         <Link href="/hackathons">
//           <button>해커톤 보기</button>
//         </Link>

//         <Link href="/camp">
//           <button>팀 찾기</button>
//         </Link>

//         <Link href="/rankings">
//           <button>랭킹 보기</button>
//         </Link>
//       </div>
//     </main>
//   )
// }
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-4">
        HackFlow
      </h1>

      <p className="text-gray-600 mb-8">
        해커톤 탐색부터 팀 빌딩, 제출, 리더보드까지
      </p>

      <div className="flex gap-4">

        <Link href="/hackathons">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            해커톤 보기
          </button>
        </Link>

        <Link href="/camp">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            팀 찾기
          </button>
        </Link>

        <Link href="/rankings">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            랭킹 보기
          </button>
        </Link>

      </div>

    </main>
  )
}