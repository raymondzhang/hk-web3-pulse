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
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const counts = JSON.parse(localStorage.getItem("like_counts") || "{}");
      const likedDomains = JSON.parse(localStorage.getItem("liked_domains") || "[]");
      setCount(counts[domainId] ?? 0);
      setLiked(likedDomains.includes(domainId));
    } catch {
      // ignore
    }
    setHydrated(true);
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

  // Avoid flashing a bare "0" before localStorage hydrates
  const displayText = !hydrated
    ? label
    : liked
      ? `${likedLabel}${count > 0 ? ` · ${count}` : ""}`
      : count > 0
        ? `${label} · ${count}`
        : label;

  return (
    <button
      type="button"
      onClick={handleLike}
      disabled={liked}
      aria-label={liked ? likedLabel : label}
      aria-pressed={liked}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
        liked
          ? "bg-emerald-50 text-emerald-700 border-emerald-200 cursor-default"
          : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50/50 cursor-pointer"
      }`}
      title={liked ? likedLabel : label}
    >
      <ThumbsUp className={`h-3.5 w-3.5 ${liked ? "fill-emerald-500 text-emerald-500" : ""}`} />
      <span>{displayText}</span>
    </button>
  );
}
