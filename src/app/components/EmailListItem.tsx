'use client'

import { Email } from '../types'
import { format } from 'date-fns'

interface EmailListItemProps {
    email: Email
    isSelected: boolean
    onClick: () => void
}

export default function EmailListItem({ email, isSelected, onClick }: EmailListItemProps) {
    return (
        <div
            onClick={onClick}
            className={`
        cursor-pointer p-4 border-b 
        ${isSelected ? 'bg-gray-50' : 'hover:bg-gray-50'}
      `}
        >
            <div className="flex justify-between items-start">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                        {email.sender}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                        {email.subject}
                    </p>
                </div>
                <div className="ml-3 flex-shrink-0">
                    <p className="text-sm text-gray-500">
                        {format(new Date(email.date), 'MMM d')}
                    </p>
                </div>
            </div>
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {email.body}
            </p>
            {email.analysis && email.analysis.priority === 1 && (
                <div className="mt-2">
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                        High Priority
                    </span>
                </div>
            )}
        </div>
    )
}