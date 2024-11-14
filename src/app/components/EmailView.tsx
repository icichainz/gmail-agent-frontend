'use client'

import { Email } from '../types'
import { ArrowUturnLeftIcon, ArchiveBoxIcon, TrashIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'

interface EmailViewProps {
    email: Email
    onReply: (email: Email) => void
    onArchive: (email: Email) => void
    onDelete: (email: Email) => void
}

export default function EmailView({ email, onReply, onArchive, onDelete }: EmailViewProps) {
    return (
        <div className="h-full flex flex-col bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900">{email.subject}</h1>
                        <p className="mt-1 text-sm text-gray-500">
                            From: {email.sender}
                        </p>
                        <p className="text-sm text-gray-500">
                            {format(new Date(email.date), 'PPP p')}
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => onReply(email)}
                            className="inline-flex items-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                        >
                            <ArrowUturnLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => onArchive(email)}
                            className="inline-flex items-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                        >
                            <ArchiveBoxIcon className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => onDelete(email)}
                            className="inline-flex items-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                        >
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-auto">
                <div className="prose max-w-none">
                    {email.body}
                </div>
            </div>

            {email.analysis && (
                <div className="border-t border-gray-200 px-6 py-4">
                    <h2 className="text-sm font-medium text-gray-900">AI Analysis</h2>
                    <dl className="mt-2 divide-y divide-gray-200">
                        <div className="py-3 flex justify-between text-sm">
                            <dt className="text-gray-500">Priority</dt>
                            <dd className="text-gray-900 ml-4">{email.analysis.priority}</dd>
                        </div>
                        {email.analysis.actions.length > 0 && (
                            <div className="py-3">
                                <dt className="text-sm text-gray-500">Suggested Actions</dt>
                                <dd className="mt-2">
                                    <ul className="list-disc pl-5 space-y-1">
                                        {email.analysis.actions.map((action, idx) => (
                                            <li key={idx} className="text-sm text-gray-900">{action}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                        )}
                    </dl>
                </div>
            )}
        </div>
    )
}