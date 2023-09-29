"use client";
import { useEffect } from "react";
import { M2MModel } from "@/app/utils/m2m";
import { Whisper } from "@/app/utils/whisper";

export type LoadModelProps = {
  setLoading: (loading: boolean) => void;
};

export function LoadModel(props: LoadModelProps) {
  const { setLoading } = props;

  useEffect(() => {
    (async () => {
      await Promise.all([M2MModel.getInstance(), Whisper.getInstance()]);
      setLoading(true);
    })();
  }, []);

  return (
    <div
      className={
        "fixed h-screen w-screen bg-gray-500 opacity-70 flex justify-center items-center"
      }
    >
      <div
        className={
          "h-12 w-12 flex justify-center items-center rounded-full border-4 border-gray-300 border-l-0  animate-spin"
        }
      >

      </div>
    </div>
  );
}
