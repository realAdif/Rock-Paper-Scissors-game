import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://rokrmraqhdodrulggwcq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJva3JtcmFxaGRvZHJ1bGdnd2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMDA3MjAsImV4cCI6MjAzNjg3NjcyMH0.ZwXNGsjr1CrQ2uN3wOd1j3qRLNhfa7zlJIgXB_7HARY'
);
