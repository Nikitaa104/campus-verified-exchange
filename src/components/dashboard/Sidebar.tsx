import { LayoutDashboard, Package, PlusCircle, ShoppingBag, Heart, MessageSquare, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export type TabType = "analytics" | "listings" | "upload" | "orders" | "saved" | "messages";

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: "analytics", label: "Analytics Overview", icon: LayoutDashboard },
    { id: "listings", label: "My Listings", icon: Package },
    { id: "upload", label: "Upload Product", icon: PlusCircle },
    { id: "orders", label: "Orders & Requests", icon: ShoppingBag },
    { id: "saved", label: "Saved Items", icon: Heart },
    { id: "messages", label: "Messages", icon: MessageSquare },
  ] as const;

  return (
    <aside className="w-64 shrink-0 hidden md:block">
      <div className="sticky top-24 rounded-2xl border border-border bg-card p-4 shadow-sm">
        <h2 className="mb-4 px-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Seller Dashboard
        </h2>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as TabType)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className={cn("h-4 w-4", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
