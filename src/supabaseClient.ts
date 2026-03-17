import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dcmtnghmmzuewtsunjnb.supabase.co'
const supabaseKey = 'sb_publishable_sUnFc5bCx9NV3AJ-pI6DsA_LvY10XWJ'

export const supabase = createClient(supabaseUrl, supabaseKey)