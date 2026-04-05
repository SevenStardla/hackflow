"use client"

import { useEffect, useState } from "react"

type Props = {
 deadline: string
}

export default function Countdown({deadline}:Props){

 const [time,setTime] = useState("")

 useEffect(()=>{

  function update(){

   const now = new Date().getTime()
   const end = new Date(deadline).getTime()

   const diff = end - now

   if(diff <= 0){
    setTime("마감됨")
    return
   }

   const days = Math.floor(diff/(1000*60*60*24))
   const hours = Math.floor((diff/(1000*60*60))%24)
   const minutes = Math.floor((diff/(1000*60))%60)

   setTime(`${days}일 ${hours}시간 ${minutes}분 남음`)

  }

  update()

  const timer = setInterval(update,60000)

  return ()=>clearInterval(timer)

 },[deadline])

 return(

  <p className="text-red-500 font-semibold">
   {time}
  </p>

 )

}