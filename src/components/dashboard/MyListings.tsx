import { Edit, Trash2, MoreVertical, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MyListingsProps {
  onAddNew?: () => void;
}

export function MyListings({ onAddNew }: MyListingsProps) {
  const listings = [
    {
      id: 1,
      title: "MacBook Air M1 - Excellent Condition",
      price: "₹55,000",
      status: "Active",
      views: 342,
      date: "Oct 24, 2026",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&q=80",
    },
    {
      id: 2,
      title: "Engineering Mathematics Textbook",
      price: "₹450",
      status: "Sold",
      views: 89,
      date: "Oct 20, 2026",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=80",
    },
    {
      id: 3,
      title: "Sony WH-1000XM4 Headphones",
      price: "₹18,000",
      status: "Pending",
      views: 210,
      date: "Oct 25, 2026",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&q=80",
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "Active": return "bg-success/10 text-success";
      case "Sold": return "bg-muted text-muted-foreground";
      case "Pending": return "bg-warning/10 text-warning";
      default: return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-display">My Listings</h2>
          <p className="text-muted-foreground mt-1">Manage, edit, and track your active products.</p>
        </div>
        <Button onClick={onAddNew} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant">
          Add New
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/40 text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Views</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {listings.map((item) => (
                <tr key={item.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.title} className="h-12 w-12 rounded-lg object-cover border border-border" />
                      <span className="font-medium max-w-[200px] truncate" title={item.title}>{item.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold">{item.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{item.views}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
