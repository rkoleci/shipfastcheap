'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSupabaseClient } from './SupabaseClient';
import { User } from '@supabase/supabase-js';

const UserContext = createContext<any>(null);

interface IProps {
    children: React.ReactNode;
}

export const UserProvider  = ({ children }: IProps) => {
  const supabase = useSupabaseClient()
  const [user, setUser] = useState<User | null |undefined>(null);

  useEffect(() => {
    const getUserdata = async () => {
      const response = await  supabase?.auth.getUser()
      setUser(response?.data?.user)
    }

    getUserdata()
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
    return useContext(UserContext);
  };
