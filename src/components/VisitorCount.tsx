"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .rpc("increment_views", { page_id: "jingjingji.me" })
      .then(({ data }) => setCount(data));
  }, []);

  return (
    <p className="text-xs font-mono text-stone-400 dark:text-stone-600">
      {count === null ? "..." : count.toLocaleString()} visits
    </p>
  );
}
