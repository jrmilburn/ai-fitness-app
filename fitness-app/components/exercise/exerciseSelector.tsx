"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import { getExerciseTemplates } from "@/server/exerciseTemplate/getExerciseTemplates";
import { addExercise } from "@/server/exercise/addExercise";

import type { ExerciseTemplate } from "@/generated/prisma";
import { ExerciseTemplateButton } from "./exerciseTemplateButton";

import { ArrowLeft } from "lucide-react";

type Props = {
  setNewExerciseSelector: React.Dispatch<React.SetStateAction<boolean>>;
  newExerciseSelector: boolean;
  workoutId: string;
};

export default function ExerciseSelector({
  setNewExerciseSelector,
  newExerciseSelector,
  workoutId,
}: Props) {
  const [exerciseTemplates, setExerciseTemplates] = useState<ExerciseTemplate[]>([]);
  const [search, setSearch] = useState("");
  const [detailTemplate, setDetailTemplate] = useState<ExerciseTemplate | null>(null);

  const router = useRouter();

  const inDetail = !!detailTemplate;

  useEffect(() => {
    async function loadTemplates() {
      const templates = await getExerciseTemplates();
      setExerciseTemplates(templates);
    }
    loadTemplates();
  }, []);

  const filteredTemplates = useMemo(() => {
    const q = search.toLowerCase();
    return exerciseTemplates.filter((t) => {
      return (
        t.name.toLowerCase().includes(q) ||
        (t.description?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [exerciseTemplates, search]);

  const handleAddExercise = async (template: ExerciseTemplate) => {
    await addExercise(workoutId, template);
    router.refresh();
  };

  const handleSelectFromList = async (template: ExerciseTemplate) => {
    await handleAddExercise(template);
    setNewExerciseSelector(false);
  };

  const handleSelectFromDetail = async () => {
    if (!detailTemplate) return;
    await handleAddExercise(detailTemplate);
    setNewExerciseSelector(false);
  };

  return (
    <Dialog open={newExerciseSelector} onOpenChange={setNewExerciseSelector}>
      <DialogContent className="h-[520px] max-w-lg border border-[#2E2E32] bg-[#1C1C1E] text-zinc-50">
        <DialogHeader>
          <div className="flex items-center gap-2">
            {inDetail && (
              <button
                type="button"
                onClick={() => setDetailTemplate(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#18181B] text-zinc-300 transition-colors hover:bg-[#2A173F] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            )}
            <DialogTitle className="text-sm font-medium text-zinc-100">
              {inDetail
                ? detailTemplate?.name ?? "Exercise details"
                : "Select new exercise"}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="relative mt-2 overflow-hidden">
          <div
            className={
              "flex w-full transition-transform duration-300 ease-out " +
              (inDetail ? "-translate-x-full" : "translate-x-0")
            }
          >
            {/* LIST VIEW PANEL */}
            <div className="min-w-full pr-1">
              <div className="mb-3">
                <Input
                  placeholder="Filter exercises..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-9 text-xs"
                />
              </div>

              <div className="max-h-[360px] space-y-2 overflow-y-auto">
                {filteredTemplates.length === 0 ? (
                  <p className="text-sm text-zinc-500">
                    No exercise templates found.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 gap-2">
                    {filteredTemplates.map((t) => (
                      <ExerciseTemplateButton
                        key={t.id}
                        template={t}
                        onSelect={() => handleSelectFromList(t)}
                        onShowInfo={() => setDetailTemplate(t)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* DETAIL VIEW PANEL */}
            <div className="min-w-full pl-1">
              {detailTemplate ? (
                <div className="max-h-[360px] space-y-4 overflow-y-auto">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-zinc-50">
                      {detailTemplate.name}
                    </h3>
                    {detailTemplate.description && (
                      <p className="text-sm text-zinc-400">
                        {detailTemplate.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="button"
                      className="w-full rounded-md bg-[#A64DFF] text-xs font-medium text-white shadow-sm hover:bg-[#B56BFF]"
                      onClick={handleSelectFromDetail}
                    >
                      Add exercise to workout
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex h-[360px] items-center justify-center text-sm text-zinc-500">
                  Select an exercise to view details.
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
