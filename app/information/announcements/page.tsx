"use client"

import { useState, useMemo } from "react"

interface Announcement {
  id: number
  title: string
  category: string
  priority: string
  content: string
  image_url?: string
  status: string
  created_at: string
}

export default function AnnouncementsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const announcements: Announcement[] = useMemo(() => [
    {
      id: 1,
      title: "Emergency Evacuation Drill This Saturday",
      category: "emergency",
      priority: "high",
      content: "All residents are required to participate in the municipal-wide emergency evacuation drill this Saturday at 9:00 AM. This is a crucial exercise to ensure everyone knows the proper evacuation procedures.",
      status: "active",
      created_at: "2025-09-28T10:00:00Z"
    },
    {
      id: 2,
      title: "Disaster Preparedness Workshop - Oct 15",
      category: "event",
      priority: "medium",
      content: "Join us for a comprehensive disaster preparedness workshop at the Municipal Hall on October 15th. Learn essential skills for emergency situations, including first aid, fire safety, and disaster response.",
      status: "active",
      created_at: "2025-09-25T14:30:00Z"
    },
    {
      id: 3,
      title: "Road Closure Due to Infrastructure Repair",
      category: "notice",
      priority: "medium",
      content: "Please be advised that the main road near Barangay Centro will be closed for infrastructure repairs from October 1-5. Alternative routes are available via Barangay Rawis.",
      status: "active",
      created_at: "2025-09-24T08:15:00Z"
    },
    {
      id: 4,
      title: "Typhoon Season Preparation Reminder",
      category: "emergency",
      priority: "high",
      content: "As we enter typhoon season, please ensure your emergency go-bags are ready. Check your supplies including food, water, flashlights, batteries, and important documents.",
      status: "active",
      created_at: "2025-09-22T16:45:00Z"
    },
    {
      id: 5,
      title: "Community Clean-Up Drive This Weekend",
      category: "event",
      priority: "low",
      content: "Join our community clean-up drive this weekend starting at 7:00 AM. Help keep our municipality clean and safe. Volunteers will receive refreshments and community service certificates.",
      status: "active",
      created_at: "2025-09-20T09:00:00Z"
    },
    {
      id: 6,
      title: "New Emergency Hotline Number",
      category: "notice",
      priority: "high",
      content: "Our new 24/7 emergency hotline is now active: (052) 483-5555. Save this number in your phone for immediate assistance during emergencies.",
      status: "active",
      created_at: "2025-09-18T11:20:00Z"
    }
  ], [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="bg-repeat w-full h-full"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMEg1MFY1MEgweiIgc3Ryb2tlPSIjZmNkNTMwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz4KPC9zdmc+')",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Official Announcements</h1>
              <p className="text-xl mb-8 text-blue-100">
                Stay informed with the latest updates, events, and important notices
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-yellow-500 text-blue-950 px-6 py-3 rounded-full font-semibold">
                  <i className="fas fa-bullhorn mr-2"></i>Latest Updates
                </div>
                <div className="bg-blue-800 px-6 py-3 rounded-full font-semibold">
                  <i className="fas fa-calendar-alt mr-2"></i>Upcoming Events
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-yellow-500 rounded-full opacity-20 absolute -top-6 -left-6"></div>
                <div className="w-48 h-48 md:w-64 md:h-64 bg-blue-950 rounded-full opacity-20 absolute -bottom-6 -right-6"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-yellow-500 flex items-center justify-center animate-pulse">
                  <i className="fas fa-megaphone text-yellow-500 text-6xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
  <main className="container mx-auto px-4 py-12">
        {/* Featured Announcement Banner */}
       
        {/* Filter and Search Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-3xl font-bold text-blue-950 mb-4 md:mb-0">All Announcements</h2>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search announcements..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
                  />
                  <i className="fas fa-search absolute left-3 top-4 text-gray-400"></i>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  <option value="event">Events</option>
                  <option value="notice">Notices</option>
                  <option value="emergency">Emergencies</option>
                </select>
              </div>
            </div>

            {/* Announcement Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {announcements.length === 0 ? (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-600">No announcements found.</p>
                </div>
              ) : (
                announcements
                  .filter((a) => {
                    const matchesSearch =
                      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      a.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      a.category.toLowerCase().includes(searchTerm.toLowerCase())
                    const matchesCategory = !selectedCategory || a.category === selectedCategory
                    return matchesSearch && matchesCategory
                  })
                  .map((a) => (
                    <div
                      key={a.id}
                      className={`bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 hover:shadow-xl transition-shadow ${
                        a.category === "emergency"
                          ? "border-red-500"
                          : a.category === "event"
                          ? "border-yellow-500"
                          : a.category === "notice"
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-2 ${
                              a.category === "emergency"
                                ? "bg-red-100 text-red-800"
                                : a.category === "event"
                                ? "bg-yellow-100 text-yellow-800"
                                : a.category === "notice"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-700"
                            }`}>
                              {a.category.charAt(0).toUpperCase() + a.category.slice(1)}
                            </span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                              {a.priority ? `${a.priority.charAt(0).toUpperCase() + a.priority.slice(1)} Priority` : ""}
                            </span>
                          </div>
                          <div className="text-gray-500 text-sm">
                            {new Date(a.created_at).toLocaleDateString()}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-950 mb-4">{a.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {a.content.replace(/<[^>]*>/g, "").substring(0, 200)}{a.content.length > 200 ? "..." : ""}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center text-white font-bold mr-3">
                              {a.title.charAt(0)}
                            </div>
                            <div>
                              <p className="font-semibold text-blue-950">MDRRMO Office</p>
                              <p className="text-sm text-gray-500">Official Announcement</p>
                            </div>
                          </div>
                          {/* Optionally add a Read More button or modal */}
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>
            {/* End dynamic announcement cards grid */}
          </div>
        </section>

        {/* Statistics and Quick Info */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Total Announcements */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullhorn text-yellow-500 text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-blue-950 mb-2">47</h3>
              <p className="text-gray-600">Total Announcements</p>
            </div>

            {/* Active Emergencies */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-exclamation-triangle text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-blue-950 mb-2">2</h3>
              <p className="text-gray-600">Active Emergencies</p>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-calendar-alt text-blue-950 text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-blue-950 mb-2">5</h3>
              <p className="text-gray-600">Upcoming Events</p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section>
          <div className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-xl text-blue-100 mb-6">
                  Subscribe to our newsletter to receive important announcements directly to your email.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="px-6 py-3 rounded-lg text-blue-950 focus:ring-2 focus:ring-yellow-500 focus:outline-none w-full sm:w-auto"
                  />
                  <button className="bg-yellow-500 text-blue-950 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope-open-text text-blue-950 text-4xl"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
