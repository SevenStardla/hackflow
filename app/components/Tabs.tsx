"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"

type Tab = {
  id: string
  label: string
}

type Props = {
  tabs: Tab[]
  children: (activeTab: string) => React.ReactNode
}

export default function Tabs({ tabs, children }: Props) {

  const searchParams = useSearchParams()
  const tabFromUrl = searchParams.get("tab")

  const router = useRouter()
  const pathname = usePathname()

  const activeTab = tabFromUrl || "overview"

  function changeTab(tab: string) {
  router.push(`${pathname}?tab=${tab}`)
}

  return (

    <div>

      <div className="flex gap-2 border-b mb-6">

        {tabs.map(tab => (

          <button
            key={tab.id}
            onClick={() => changeTab(tab.id)}
            className={`px-4 py-2 text-sm ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>

        ))}

      </div>

      <div>
        {children(activeTab)}
      </div>

    </div>

  )
}