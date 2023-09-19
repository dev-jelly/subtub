"use client";
import React, { useState } from "react";
import { LoadModel } from "@/app/components/LoadModel";

export type MainProps = {};

export function Main(props: MainProps) {
  const [loading, setLoading] = useState(false);

  if (!loading) {
    return <LoadModel setLoading={setLoading} />;
  }

  return <></>;
}
