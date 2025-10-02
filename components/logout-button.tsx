"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      router.push("/login")
    } catch (error) {
      console.error("Error logging out:", error)
      router.push("/login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors duration-200 disabled:opacity-50"
    >
      <i className={`fas ${isLoading ? "fa-spinner fa-spin" : "fa-sign-out-alt"} mr-2`}></i>
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  )
}
