import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitEnquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      fullName,
      email,
      city,
      currentWebsite,
      improvement,
    }: {
      fullName: string;
      email: string;
      city: string;
      currentWebsite: string | null;
      improvement: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitEnquiry(
        fullName,
        email,
        city,
        currentWebsite,
        improvement,
      );
    },
  });
}
