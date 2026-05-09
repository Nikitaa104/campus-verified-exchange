import { ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Orders() {
  const orders = [
    {
      id: "ORD-2026-001",
      product: "Sony WH-1000XM4 Headphones",
      buyer: "Rahul Verma",
      date: "Oct 26, 2026",
      status: "Requested",
      amount: "₹18,000",
    },
    {
      id: "ORD-2026-002",
      product: "Engineering Mathematics Textbook",
      buyer: "Sneha Patel",
      date: "Oct 24, 2026",
      status: "Completed",
      amount: "₹450",
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-display">Orders & Requests</h2>
          <p className="text-muted-foreground mt-1">Manage buyer requests and completed transactions.</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 bg-background border border-border px-3 py-2 rounded-lg w-full max-w-sm">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input type="text" placeholder="Search orders..." className="bg-transparent border-none outline-none text-sm w-full" />
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/40 text-muted-foreground border-b border-border">
            <tr>
              <th className="px-6 py-4 font-medium">Order ID</th>
              <th className="px-6 py-4 font-medium">Product</th>
              <th className="px-6 py-4 font-medium">Buyer</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-muted/20 transition-colors cursor-pointer">
                <td className="px-6 py-4 font-medium text-primary">{order.id}</td>
                <td className="px-6 py-4">{order.product}</td>
                <td className="px-6 py-4">{order.buyer}</td>
                <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${order.status === "Completed" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-right">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
