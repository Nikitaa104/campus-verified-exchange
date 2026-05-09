import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SavedItems() {
  const saved = [
    {
      id: 1,
      title: "iPad Pro M2 (2022)",
      price: "₹65,000",
      seller: "Arjun K.",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&q=80",
    },
    {
      id: 2,
      title: "Hero Sprint Bicycle",
      price: "₹4,500",
      seller: "Priya S.",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=300&q=80",
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold font-display">Saved Items</h2>
        <p className="text-muted-foreground mt-1">Products you've favorited to buy later.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {saved.map((item) => (
          <div key={item.id} className="group relative rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border/40 relative">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <button className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur rounded-full text-destructive hover:bg-background transition-colors">
                <Heart className="h-4 w-4 fill-current" />
              </button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold truncate">{item.title}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-display font-bold text-primary">{item.price}</span>
                <span className="text-xs text-muted-foreground">by {item.seller}</span>
              </div>
              <Button className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80">
                View Product
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
