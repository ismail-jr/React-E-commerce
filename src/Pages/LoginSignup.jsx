import React from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Card, CardContent } from "@/Components/ui/card";

const LoginSignup = () => {
  return (
    <div className="container flex min-h-[60vh] items-center justify-center py-10 md:py-16">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6 p-6 md:p-8">
          <h1 className="text-center text-2xl font-semibold md:text-3xl">
            Sign Up
          </h1>
          <div className="space-y-4">
            <Input type="text" placeholder="Your name:" className="h-11" />
            <Input type="email" placeholder="Email Address:" className="h-11" />
            <Input
              type="password"
              placeholder="Password:"
              className="h-11"
            />
          </div>
          <Button className="h-11 w-full rounded-full bg-brand hover:bg-brand/90">
            Continue
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account{" "}
            <span className="cursor-pointer font-medium text-brand">
              login here
            </span>
          </p>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-xs text-muted-foreground md:text-sm">
              By continuing, I agree to the term of use & privacy policy
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginSignup;
