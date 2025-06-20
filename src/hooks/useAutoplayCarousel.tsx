
import { useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export const useAutoplayCarousel = (
  api: CarouselApi | undefined,
  delay: number = 4000
) => {
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [api, delay]);
};
