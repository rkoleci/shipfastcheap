'use client'

import { createClient } from '@/utils/supabase/client';
import { SupabaseClient } from '@supabase/supabase-js';
import React, { createContext, useContext, useState } from 'react';

const AppSupabaseClient = createContext<SupabaseClient | null >(null);

interface IProps {
    children: React.ReactNode;
}

export const SupabaseClientProvider  = ({ children }: IProps) => {
  const supabase = createClient()

  return (
    <AppSupabaseClient.Provider value={supabase}>
      {children}
    </AppSupabaseClient.Provider>
  );
};

export default SupabaseClientProvider;

export const useSupabaseClient = () => {
    return useContext(AppSupabaseClient);
  };
