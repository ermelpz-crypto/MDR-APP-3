"use client"

import React from "react"
import { X, Phone, Users, Stethoscope, Shield, Building2, Flame } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import * as ScrollArea from "@radix-ui/react-scroll-area"

interface HotlineModalProps {
  isOpen: boolean
  onClose: () => void
}

const HotlineModal: React.FC<HotlineModalProps> = ({ isOpen, onClose }) => {
  const hotlines = React.useMemo(() => [
    {
      icon: Shield,
      name: "MDRRMO Emergency Line",
      department: "Municipal Disaster Risk Reduction and Management Office",
      number: "911 / (052) 483-5555",
      description: "24/7 Emergency Response and Disaster Management",
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Flame,
      name: "Fire Department",
      department: "Bureau of Fire Protection - Pio Duran",
      number: "(052) 487-2222",
      description: "Fire Emergency Response",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Shield,
      name: "Police Station",
      department: "Philippine National Police - Pio Duran",
      number: "(052) 487-3333",
      description: "Law Enforcement and Public Safety",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Stethoscope,
      name: "Rural Health Unit",
      department: "Municipal Health Office",
      number: "(052) 487-4444",
      description: "Medical Emergency and Health Services",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      name: "Mayor's Office",
      department: "Office of the Municipal Mayor",
      number: "(052) 487-1111",
      description: "General Inquiries and Assistance",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Building2,
      name: "DSWD",
      department: "Department of Social Welfare and Development",
      number: "(052) 487-6666",
      description: "Social Services and Relief Operations",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ], [])

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl mx-4 max-h-[90vh]">
          {/* Modal Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#042189]/10 rounded-full flex items-center justify-center">
              <Phone className="text-[#042189]" size={24} />
            </div>
            <Dialog.Title className="text-2xl font-bold text-[#042189]">Emergency Hotlines</Dialog.Title>
            <Dialog.Close className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#042189] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500">
              <X className="h-6 w-6 text-slate-400 hover:text-red-500 transition-colors" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>

          <ScrollArea.Root className="flex-1 overflow-hidden">
            <ScrollArea.Viewport className="h-full w-full rounded">
              {/* Hotline List */}
              <div className="space-y-3 text-slate-800 text-sm pr-4 max-h-[400px]">
                {hotlines.map((hotline, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${hotline.color} rounded-lg p-4 hover:shadow-md transition duration-300 border border-slate-200/50`}
                  >
                    <hotline.icon className={`${hotline.iconColor} w-7 h-7 mt-1 flex-shrink-0`} />
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">{hotline.name}</p>
                      {hotline.department && <p className="text-xs text-slate-600 mb-1">{hotline.department}</p>}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {hotline.number.split(" / ").map((num: string, numIndex: number) => (
                          <a
                            key={numIndex}
                            href={`tel:${num.replace(/[^\d]/g, "")}`}
                            className="text-[#fccf03] hover:text-[#042189] hover:underline font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#042189] focus:ring-offset-2 rounded px-1"
                          >
                            {num}
                          </a>
                        ))}
                      </div>
                      {hotline.description && <p className="text-xs text-slate-600 mt-2">{hotline.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-slate-100 transition-colors duration-[160ms] ease-out hover:bg-slate-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="flex-1 bg-slate-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>

          {/* Footer Note */}
          <div className="mt-6 p-4 bg-[#fccf03]/10 rounded-lg border-l-4 border-[#fccf03]">
            <p className="text-sm text-slate-700">
              <strong>Note:</strong> For life-threatening emergencies, call{" "}
              <strong className="text-red-600">911</strong> immediately. Keep these numbers handy for quick access
              during emergencies.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default HotlineModal
