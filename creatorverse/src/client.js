import { createClient } from '@supabase/supabase-js'
const URL = 'https://uyihmlzsefutphmimeox.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5aWhtbHpzZWZ1dHBobWltZW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3Mzc0MTgsImV4cCI6MjAwNDMxMzQxOH0.cwi-0KsQZeOCj7QJHSHsjJDZgj-tYSXmqHjLSYMVS-w';

export const supabase = createClient(URL, API_KEY);