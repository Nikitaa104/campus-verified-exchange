import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar, TabType } from "@/components/dashboard/Sidebar";
import { Analytics } from "@/components/dashboard/Analytics";
import { MyListings } from "@/components/dashboard/MyListings";
import { UploadProduct } from "@/components/dashboard/UploadProduct";
import { Orders } from "@/components/dashboard/Orders";
import { SavedItems } from "@/components/dashboard/SavedItems";
import { Messages } from "@/components/dashboard/Messages";

export const Route = createFileRoute("/_authed/dashboard")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "Seller Dashboard · Kampus" }] }),
});

function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("analytics");

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          
          {/* Mobile Tabs Header */}
          <div className="mb-6 md:hidden overflow-x-auto pb-2 flex gap-2 hide-scrollbar">
            {["analytics", "listings", "upload", "orders", "saved", "messages"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                  activeTab === tab 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-background rounded-2xl">
            {activeTab === "analytics" && <Analytics />}
            {activeTab === "listings" && <MyListings onAddNew={() => setActiveTab("upload")} />}
            {activeTab === "upload" && <UploadProduct />}
            {activeTab === "orders" && <Orders />}
            {activeTab === "saved" && <SavedItems />}
            {activeTab === "messages" && <Messages />}
          </div>
        </main>
      </div>
    </div>
  );
}
