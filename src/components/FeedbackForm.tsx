"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Mail } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";

interface FeedbackFormProps {
  t: Dictionary;
}

export function FeedbackForm({ t }: FeedbackFormProps) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    const subject = encodeURIComponent("[HK Web3 Pulse 反馈]");
    const body = encodeURIComponent(
      `姓名：${name}\n邮箱：${email}\n\n意见内容：\n${message}`
    );

    window.location.href = `mailto:414628016@qq.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setSent(true);
      form.reset();
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
            {t.feedback.nameLabel}
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-colors"
            placeholder={t.feedback.namePlaceholder}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
            {t.feedback.emailLabel}
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-colors"
            placeholder={t.feedback.emailPlaceholder}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
          {t.feedback.messageLabel}
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-colors resize-none"
          placeholder={t.feedback.messagePlaceholder}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-400 dark:text-slate-500">{t.feedback.privacyNote}</p>
        {sent ? (
          <span className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle className="h-3.5 w-3.5" />
            {t.feedback.sent}
          </span>
        ) : (
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            <Send className="h-3.5 w-3.5" />
            {t.feedback.submitButton}
          </button>
        )}
      </div>
      <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
        <Mail className="h-3 w-3" />
        <span>
          {t.feedback.directEmail}
        </span>
      </div>
    </form>
  );
}
