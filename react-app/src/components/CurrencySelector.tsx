import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrency } from "@/contexts/CurrencyContext";

const CurrencySelector = () => {
  const { currency, currencies, setCurrency, isLoading } = useCurrency();

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" disabled className="gap-2">
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">Loading...</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currency.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {currencies.map((curr) => (
          <DropdownMenuItem
            key={curr.code}
            onClick={() => setCurrency(curr)}
            className={`flex items-center justify-between ${
              curr.code === currency.code ? "bg-primary/10" : ""
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{curr.symbol}</span>
              <span>{curr.code}</span>
            </span>
            <span className="text-xs text-muted-foreground">{curr.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencySelector;