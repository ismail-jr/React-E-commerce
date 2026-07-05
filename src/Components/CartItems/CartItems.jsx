import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CartItems = () => {
  const { getTotalAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  const cartProducts = all_product.filter((e) => cartItems[e.id] > 0);

  if (cartProducts.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Add some products to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <h1 className="mb-6 text-2xl font-semibold md:mb-8 md:text-3xl">
        Shopping Cart
      </h1>

      {/* Desktop table header */}
      <div className="mb-4 hidden grid-cols-[80px_1fr_100px_80px_100px_60px] items-center gap-4 px-2 text-sm font-semibold text-muted-foreground lg:grid">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p className="text-center">Qty</p>
        <p>Total</p>
        <p className="text-center">Remove</p>
      </div>

      <div className="space-y-4">
        {cartProducts.map((e) => (
          <div key={e.id}>
            {/* Desktop row */}
            <div className="hidden grid-cols-[80px_1fr_100px_80px_100px_60px] items-center gap-4 rounded-lg border bg-card p-4 lg:grid">
              <img
                src={e.image}
                alt={e.name}
                className="h-16 w-16 rounded-md object-cover"
              />
              <p className="text-sm font-medium">{e.name}</p>
              <p className="text-sm font-medium text-brand">GH₵{e.new_price}</p>
              <div className="flex justify-center">
                <span className="flex h-8 w-8 items-center justify-center rounded border text-sm">
                  {cartItems[e.id]}
                </span>
              </div>
              <p className="text-sm font-medium">
                GH₵{e.new_price * cartItems[e.id]}
              </p>
              <button
                onClick={() => removeFromCart(e.id)}
                className="flex justify-center"
                aria-label="Remove item"
              >
                <img src={remove_icon} alt="Remove" className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile card */}
            <Card className="lg:hidden">
              <CardContent className="flex gap-4 p-4">
                <img
                  src={e.image}
                  alt={e.name}
                  className="h-20 w-20 shrink-0 rounded-md object-cover"
                />
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium leading-snug">{e.name}</p>
                    <button
                      onClick={() => removeFromCart(e.id)}
                      aria-label="Remove item"
                    >
                      <img src={remove_icon} alt="Remove" className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-brand">
                      GH₵{e.new_price}
                    </span>
                    <span>Qty: {cartItems[e.id]}</span>
                    <span className="font-semibold">
                      GH₵{e.new_price * cartItems[e.id]}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:justify-between">
        <Card className="flex-1 lg:max-w-md">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-xl font-semibold">Cart Total</h2>
            <div className="flex justify-between text-sm md:text-base">
              <p>Subtotal</p>
              <p>GH₵{getTotalAmount()}</p>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <h3>Total</h3>
              <h3>GH₵{getTotalAmount()}</h3>
            </div>
            <Button className="w-full bg-foreground hover:bg-foreground/90">
              PROCEED TO CHECKOUT
            </Button>
          </CardContent>
        </Card>

        <Card className="flex-1 lg:max-w-md">
          <CardContent className="space-y-4 p-6">
            <p className="text-sm text-muted-foreground md:text-base">
              If you have a promo code, enter it here
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input placeholder="Enter promo code" className="flex-1" />
              <Button variant="secondary" className="shrink-0">
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CartItems;
