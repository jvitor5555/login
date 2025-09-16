'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie";

export default function App() {

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token')

    console.log(token)

    if (token)
      router.push('/dashboard');
    else
      router.push('/login')
  }, [router]);

  return null

}