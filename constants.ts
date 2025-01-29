import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { appConfig } from "@/lib/appConfig";
import { ChatCompletionRequestMessage } from "./types";

export const MAX_FREE_COUNTS = 10;

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];

export const SYSTEM_PROMPT_CONVERSATION: ChatCompletionRequestMessage = {
  role: "system",
  content: `You are an intelligent AI assistant powered by App name: ${appConfig.app_name}. You aim to be helpful, friendly, and knowledgeable while maintaining a professional tone.`
}

export const SYSTEM_PROMPT_CODE: ChatCompletionRequestMessage = {
  role: "system",
  content: `You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.`
}
