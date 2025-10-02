"use client"

import { usePathname } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith("/admin") || pathname?.startsWith("/login") || pathname?.startsWith("/barangay-portal")

  if (isAdminRoute) {
    return <>{children}</>
  }

  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <BackToTop />
    </>
  )
}
