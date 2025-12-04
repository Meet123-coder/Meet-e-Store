import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/ProductCard";
import { products, categories } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

const priceRanges = [
  { id: "0-50", label: "Under ₹50", min: 0, max: 50 },
  { id: "50-100", label: "₹50 - ₹100", min: 50, max: 100 },
  { id: "100-200", label: "₹100 - ₹200", min: 100, max: 200 },
  { id: "200+", label: "₹200+", min: 200, max: Infinity },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category") ? [searchParams.get("category")] : []
  );
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (search) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Price filter
    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) => {
        return selectedPriceRanges.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId);
          if (!range) return false;
          return p.price >= range.min && p.price < range.max;
        });
      });
    }

    // Sort
    switch (sortBy) {
      case "newest":
        result = result.filter((p) => p.new).concat(result.filter((p) => !p.new));
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result = result.filter((p) => p.featured).concat(result.filter((p) => !p.featured));
    }

    return result;
  }, [search, selectedCategories, selectedPriceRanges, sortBy]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const togglePriceRange = (rangeId) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(rangeId)
        ? prev.filter((r) => r !== rangeId)
        : [...prev, rangeId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setSearch("");
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedPriceRanges.length > 0 || search;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.name)}
                onCheckedChange={() => toggleCategory(category.name)}
              />
              <Label
                htmlFor={`category-${category.id}`}
                className="text-sm font-normal cursor-pointer"
              >
                {category.name} ({category.productCount})
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox
                id={`price-${range.id}`}
                checked={selectedPriceRanges.includes(range.id)}
                onCheckedChange={() => togglePriceRange(range.id)}
              />
              <Label
                htmlFor={`price-${range.id}`}
                className="text-sm font-normal cursor-pointer"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Our Collection
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of premium products, designed for the modern lifestyle.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Mobile Filter */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {hasActiveFilters && (
                      <span className="ml-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                        {selectedCategories.length + selectedPriceRanges.length}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((category) => (
                  <Button
                    key={category}
                    variant="secondary"
                    size="sm"
                    onClick={() => toggleCategory(category)}
                    className="gap-1"
                  >
                    {category}
                    <X className="h-3 w-3" />
                  </Button>
                ))}
                {selectedPriceRanges.map((rangeId) => {
                  const range = priceRanges.find((r) => r.id === rangeId);
                  return (
                    <Button
                      key={rangeId}
                      variant="secondary"
                      size="sm"
                      onClick={() => togglePriceRange(rangeId)}
                      className="gap-1"
                    >
                      {range?.label}
                      <X className="h-3 w-3" />
                    </Button>
                  );
                })}
              </div>
            )}

            {/* Results count */}
            <p className="text-muted-foreground mb-6">
              Showing {filteredProducts.length} products
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">
                  No products found
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
