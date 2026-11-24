"use client";
import { Button } from "@/components/ui/button";
import { useNavigationContext } from "@/context/context-api";

export function ModalHandler({
  translation,
  className,
}: {
  translation: string;
  className?: string;
}) {
  const { showModal, setShowModal } = useNavigationContext();
  return (
    <Button
      className={className}
      onClick={() => setShowModal(!showModal)}
      variant="outline"
    >
      {translation}
    </Button>
  );
}
