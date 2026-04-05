export type HackathonStatusType =
  | "upcoming"
  | "ongoing"
  | "ended"


type Props = {
  status: HackathonStatusType
}

export default function HackathonStatus({status}:Props){

  const styles = {
    upcoming: "bg-yellow-200 text-yellow-800",
    ongoing: "bg-green-200 text-green-800",
    ended: "bg-gray-200 text-gray-700"
  }

  const labels = {
    upcoming: "Coming Soon",
    ongoing: "Live",
    ended: "Finished"
  }

  return(

    <span className={`px-2 py-1 rounded text-xs ${styles[status]}`}>
      {labels[status]}
    </span>

  )

}