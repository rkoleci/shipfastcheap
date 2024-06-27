'use client'
import { handleRequest } from '@/utils/auth-helpers/client';
import { storeWaitlist } from '@/utils/auth-helpers/server';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ButtonLead({ label }: { label?: string}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);

    handleRequest(e, storeWaitlist, router);
    setIsSubmitting(false);
  };
  
  return (
    <form id="waitlistForm" onSubmit={(e) => handleSubmit(e)} className='w-full'>
      <div className="flex flex-col gap-4">
        <input type="text" name="email" maxLength={64} placeholder="tom@cruise.com" className="input rounded-lg input-border text-accent-main/80 w-full  border border-slate-600" />
        <button type="submit" className="btn btn-primary rounded-lg font-medium text-accent-secondary w-full">
          {label || 'Join Waitlist'}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
        {isSubmitting && 'submitting'}
      </div>
    </form>
  )
}