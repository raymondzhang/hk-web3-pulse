"use client";

import { useState, useEffect, useCallback } from "react";
import { ThumbsUp } from "lucide-react";

interface LikeButtonProps {
  domainId: string;
  label: string;
  likedLabel: string;
}

export function LikeButton({ domainId, label, likedLabel }: LikeButtonProps) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const counts = JSON.parse(localStorage.getItem("like_counts") || "{}");
      const likedDomains = JSON.parse(localStorage.getItem("liked_domains") || "[]");
      setCount(counts[domainId] ?? 0);
      setLiked(likedDomains.includes(domainId));
    } catch {
      // ignore
    }
    setMounted(true);
  }, [domainId]);

  const handleLike = useCallback(() => {
    if (liked) return;
    const newCount = count + 1;
    setCount(newCount);
    setLiked(true);
    try {
      const counts = JSON.parse(localStorage.getItem("like_counts") || "{}");
      counts[domainId] = newCount;
      localStorage.setItem("like_counts", JSON.stringify(counts));

      const likedDomains = JSON.parse(localStorage.getItem("liked_domains") || "[]");
      if (!likedDomains.includes(domainId)) {
        likedDomains.push(domainId);
        localStorage.setItem("liked_domains", JSON.stringify(likedDomains));
      }
    } catch {
      // ignore
    }
  }, [domainId, count, liked]);

  // Render an invisible placeholder during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium opacity-0" aria-hidden="true">
        <ThumbsUp className="h-3.5 w-3.5" />
        <span>0</span>
      </span>
    );
  }

  return (
    <button
      onClick={handleLike}
      disabled={liked}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
        liked
          ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 cursor-default"
          : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 cursor-pointer"
      }`}
      title={liked ? likedLabel : label}
    >
      <ThumbsUp className={`h-3.5 w-3.5 ${liked ? "fill-emerald-500 text-emerald-500 dark:fill-emerald-400 dark:text-emerald-400" : ""}`} />
      <span>{count}</span>
    </button>
  );
}
