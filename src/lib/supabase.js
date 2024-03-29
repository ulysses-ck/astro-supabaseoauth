import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	import.meta.env.SUPABASE_URL,
	import.meta.env.SUPABASE_ANON_KEY,
	{
		auth: {
			flowType: "pkce",
		},
	}
);
export default supabase
