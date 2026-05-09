import { useRef, useState } from "react";
import { UploadCloud, Sparkles, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UploadProduct() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Create local object URLs for preview
      const newImages = Array.from(e.target.files).map(f => URL.createObjectURL(f));
      setImages(prev => [...prev, ...newImages].slice(0, 5)); // max 5
    }
  };

  return (
    <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold font-display">Upload Product</h2>
        <p className="text-muted-foreground mt-1">List a new item for sale, rent, or exchange on Kampus.</p>
      </div>

      <form className="space-y-6 bg-card border border-border p-6 rounded-2xl shadow-sm">
        
        {/* Images */}
        <div>
          <label className="block text-sm font-semibold mb-2">Product Images</label>
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-muted/30 transition-colors cursor-pointer group"
          >
            <input 
              type="file" 
              multiple 
              accept="image/png, image/jpeg, image/webp" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <div className="p-3 bg-primary/10 text-primary rounded-full mb-3 group-hover:scale-110 transition-transform">
              <UploadCloud className="h-6 w-6" />
            </div>
            <p className="font-medium text-foreground">Click or drag images here</p>
            <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP up to 5MB (Max 5 images)</p>
          </div>
          
          {/* Image Previews */}
          {images.length > 0 && (
            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <div key={idx} className="relative h-20 w-20 shrink-0 rounded-lg border border-border overflow-hidden group">
                  <img src={img} alt="Preview" className="h-full w-full object-cover" />
                  <button 
                    type="button"
                    onClick={() => setImages(images.filter((_, i) => i !== idx))}
                    className="absolute top-1 right-1 bg-black/50 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Reel Upload */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
          <div className="flex items-center gap-2 mb-3">
             <Sparkles className="h-4 w-4 text-primary" />
             <label className="text-sm font-bold text-primary">Marketplace Reel (Recommended)</label>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Products with a short video reel get 3x more views. Upload a 15-30s vertical video showing the product in action.
          </p>
          <div className="flex items-center gap-4">
            <Button type="button" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
              <UploadCloud className="mr-2 h-4 w-4" />
              Upload Video
            </Button>
            <span className="text-[10px] text-muted-foreground italic">Max size: 20MB • MP4, MOV</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Title */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold mb-2">Product Title</label>
            <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="e.g. MacBook Air M1 2020" />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-muted-foreground">
              <option>Electronics & Laptops</option>
              <option>Books & Notes</option>
              <option>Hostel Essentials</option>
              <option>Bicycles</option>
              <option>Other</option>
            </select>
          </div>

          {/* Listing Type */}
          <div>
            <label className="block text-sm font-semibold mb-2">Listing Type</label>
            <select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-muted-foreground">
              <option>Sell (Fixed Price)</option>
              <option>Sell (Negotiable)</option>
              <option>Rent out</option>
              <option>Exchange / Barter</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold mb-2">Price (₹)</label>
            <input type="number" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="0.00" />
            <p className="flex items-center gap-1.5 text-xs text-primary mt-2 font-medium bg-primary/10 px-2 py-1 rounded inline-flex">
              <Sparkles className="h-3 w-3" /> AI Suggestion: ₹40,000 - ₹45,000
            </p>
          </div>

          {/* Condition */}
          <div>
            <label className="block text-sm font-semibold mb-2">Condition</label>
            <select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-muted-foreground">
              <option>Like New</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Heavily Used</option>
            </select>
          </div>

          {/* Location */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold mb-2">Meetup Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input type="text" className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="e.g. Main Library Entrance" />
            </div>
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold mb-2">Description</label>
            <textarea rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Provide details about the item..."></textarea>
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3 border-t border-border">
          <Button variant="ghost" type="button">Save Draft</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant px-8">Publish Listing</Button>
        </div>
      </form>
    </div>
  );
}
