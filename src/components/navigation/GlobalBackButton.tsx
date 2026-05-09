import { useRouter, useLocation } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function GlobalBackButton() {
  const router = useRouter();
  const location = useLocation();

  // Hide the back button if we're on the root landing page or reels page
  if (location.pathname === "/" || location.pathname === "/reels") {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        onClick={() => router.history.back()}
        className="group fixed top-24 left-4 z-50 flex items-center gap-2 rounded-full border border-primary/20 bg-background/90 px-4 py-2 text-sm font-semibold text-primary shadow-elegant backdrop-blur-md transition-all hover:bg-primary hover:text-primary-foreground sm:left-6 lg:left-10"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back
      </motion.button>
    </AnimatePresence>
  );
}
