import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { Database } from '../database.types'

const supabaseUrl = process.env.SUPABASE_URL || "https://lnbyfmihysrrsemoyzop.supabase.co"
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuYnlmbWloeXNycnNlbW95em9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NDI5NzcsImV4cCI6MjAyNDAxODk3N30.7ObKxVUTklvob7Mn_nU8Xs_1NhHqyij5Mi1-KMS6FjQ"

export const supabase = createClient<Database>(supabaseUrl!, supabaseAnonKey!, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})