"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Loader2 } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

export const ImageModal = ({ isOpen, onClose, src }: ImageModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-2 bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl">
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}
          <Image
            width={768}
            height={768}
            src={src}
            alt="Enlarged view"
            className="object-contain rounded-xl"
            onLoadingComplete={() => setIsLoading(false)}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
