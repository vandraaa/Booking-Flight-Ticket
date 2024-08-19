"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { FC } from "react";
import { useFormStatus } from "react-dom";
import { deleteAirplane } from "../lib/actions";

interface DeleteAirplaneProps {
  id: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="destructive" size={"sm"}>
      {pending ? (
        <>
          <span className="loading loading-spinner loading-xs mr-2"></span>
          Delete
        </>
      ) : (
        <>
          <Trash className="mr-2 size-4" />
          Delete
        </>
      )}
    </Button>
  );
}

export default function DeleteAirplane({ id }: DeleteAirplaneProps) {
  const deleteAirplaneById = deleteAirplane.bind(null, id);
  return (
    <form action={deleteAirplaneById}>
      <SubmitButton />
    </form>
  );
}
