"use client";

import * as React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import type { ExerciseTemplate } from "@prisma/client";
import type { BuilderWorkout, BuilderExercise } from "@/lib/builderTypes";

import { ExerciseCard } from "./Exercise";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type PickerMode = "add" | "replace";

type WorkoutColumnProps = {
  workout: BuilderWorkout;
  exercises: BuilderExercise[];
  index: number;
  exerciseTemplates: ExerciseTemplate[];
  onAddExercise: (workoutId: string, templateId: string) => void;
  onAddSetToExercise: (exerciseId: string) => void;
  onRenameWorkout: (workoutId: string, name: string) => void;
  onReplaceExercise: (
    workoutId: string,
    exerciseId: string,
    templateId: string
  ) => void;
  onDeleteExercise: (workoutId: string, exerciseId: string) => void;
  onDeleteWorkout: (workoutId: string) => void;
  onRemoveSetFromExercise: (exerciseId : string, setId : string) => void;
  draggable?: boolean;
};

export function WorkoutColumn({
  workout,
  exercises,
  index,
  exerciseTemplates,
  onAddExercise,
  onAddSetToExercise,
  onRenameWorkout,
  onReplaceExercise,
  onDeleteExercise,
  onDeleteWorkout,
  onRemoveSetFromExercise,
  draggable = true,
}: WorkoutColumnProps) {
  // ---- programmatic state ----
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [pickerMode, setPickerMode] = React.useState<PickerMode>("add");
  const [exerciseToReplace, setExerciseToReplace] =
    React.useState<string | null>(null);

  const [nameDialogOpen, setNameDialogOpen] = React.useState(false);
  const [pendingName, setPendingName] = React.useState(workout.name);

  React.useEffect(() => {
    setPendingName(workout.name);
  }, [workout.name]);

  // ---- workout name ----
  const handleOpenRename = () => {
    setPendingName(workout.name);
    setNameDialogOpen(true);
  };

  const handleSaveName = () => {
    const trimmed = pendingName.trim();
    if (!trimmed) return;
    onRenameWorkout(workout.id, trimmed);
    setNameDialogOpen(false);
  };

  // ---- exercise add / replace ----
  const openAddPicker = () => {
    setPickerMode("add");
    setExerciseToReplace(null);
    setPickerOpen(true);
  };

  const openReplacePicker = (exerciseId: string) => {
    setPickerMode("replace");
    setExerciseToReplace(exerciseId);
    setPickerOpen(true);
  };

  const handleSelectTemplate = (templateId: string) => {
    if (pickerMode === "add") {
      onAddExercise(workout.id, templateId);
    } else if (pickerMode === "replace" && exerciseToReplace) {
      onReplaceExercise(workout.id, exerciseToReplace, templateId);
    }
    setPickerOpen(false);
  };

    type EquipmentValue = NonNullable<ExerciseTemplate["equipment"]>;
  type MuscleGroupValue = NonNullable<ExerciseTemplate["muscleGroup"]>;

  const EQUIPMENT_OPTIONS: EquipmentValue[] = [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Kettlebell",
    "Bodyweight",
    "Machine",
  ];

  const MUSCLE_GROUP_OPTIONS: MuscleGroupValue[] = [
    "Calves",
    "Quads",
    "Hamstrings",
    "Glutes",
    "Abs",
    "Back",
    "Chest",
    "Shoulders",
    "Biceps",
    "Triceps",
    "Cardio",
  ];

  const [search, setSearch] = React.useState("");
  const [showFilters, setShowFilters] = React.useState(false);
  const [selectedEquipment, setSelectedEquipment] = React.useState<
    EquipmentValue[]
  >([]);
  const [selectedMuscleGroups, setSelectedMuscleGroups] = React.useState<
    MuscleGroupValue[]
  >([]);

  const toggleEquipment = (value: EquipmentValue) => {
    setSelectedEquipment((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleMuscleGroup = (value: MuscleGroupValue) => {
    setSelectedMuscleGroups((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelectedEquipment([]);
    setSelectedMuscleGroups([]);
  };

  const filteredTemplates = React.useMemo(
    () =>
      exerciseTemplates.filter((t) => {
        const q = search.trim().toLowerCase();

        const matchesSearch =
          !q ||
          t.name.toLowerCase().includes(q) ||
          (t.description ?? "").toLowerCase().includes(q);

        const matchesEquipment =
          selectedEquipment.length === 0 ||
          (t.equipment &&
            selectedEquipment.includes(t.equipment as EquipmentValue));

        const matchesMuscle =
          selectedMuscleGroups.length === 0 ||
          (t.muscleGroup &&
            selectedMuscleGroups.includes(t.muscleGroup as MuscleGroupValue));

        return matchesSearch && matchesEquipment && matchesMuscle;
      }),
    [exerciseTemplates, search, selectedEquipment, selectedMuscleGroups]
  );


  // ---- card body ----
  const CardBody = () => (
    <div className="md:m-2 flex min-w-[260px] flex-col rounded-lg border border-[#2E2E32] bg-[#1C1C1E] shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-lg border-b border-[#2E2E32] bg-[#18181B] px-3 py-2">
        <div className="flex flex-col gap-0.5">
          <span className="text-[0.65rem] uppercase tracking-wide text-zinc-500">
            Day {index + 1}
          </span>
          <span className="text-sm font-medium text-zinc-50">
            {workout.name}
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-zinc-500 hover:bg-[#232327] hover:text-zinc-100"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="border-[#2E2E32] bg-[#18181B] text-xs text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            <DropdownMenuItem
              onClick={handleOpenRename}
              className="cursor-pointer text-xs hover:bg-[#2A173F]"
            >
              Rename workout
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDeleteWorkout(workout.id)}
              className="cursor-pointer text-xs text-red-300 hover:bg-red-500/10"
            >
              Delete workout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Exercise list */}
      <Droppable droppableId={workout.id} type="exercise">
        {(dropProvided, snapshot) => (
          <div
            ref={dropProvided.innerRef}
            {...dropProvided.droppableProps}
            className={`rounded-b-lg border-b border-[#2E2E32] p-3 transition-colors ${
              snapshot.isDraggingOver ? "bg-[#232327]" : "bg-[#18181B]"
            }`}
          >
            {exercises.map((exercise, exIndex) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                index={exIndex}
                exerciseTemplates={exerciseTemplates}
                onAddSet={onAddSetToExercise}
                onReplace={() => openReplacePicker(exercise.id)}
                onDelete={() => onDeleteExercise(workout.id, exercise.id)}
                onRemoveSet={onRemoveSetFromExercise}
              />
            ))}

            {dropProvided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Add exercise button */}
      <div className="rounded-b-lg border-t border-[#2E2E32] bg-[#18181B] px-3 py-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={openAddPicker}
          className="w-full justify-center rounded-md border border-dashed border-[#3A3A40] bg-transparent text-xs font-medium text-zinc-300 transition-colors hover:border-[#A64DFF] hover:bg-[#2A173F] hover:text-white"
        >
          + Add exercise
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {draggable ? (
        <Draggable draggableId={workout.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <CardBody />
            </div>
          )}
        </Draggable>
      ) : (
        
        <CardBody />
        
      )}

      {/* Workout rename dialog */}
      <Dialog open={nameDialogOpen} onOpenChange={setNameDialogOpen}>
        <DialogContent className="max-w-sm border border-[#2E2E32]! bg-[#1C1C1E]! text-zinc-50">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium text-zinc-50">
              Rename workout
            </DialogTitle>
          </DialogHeader>
          <div className="mt-3 space-y-2">
            <label className="text-xs font-medium text-zinc-300">
              Workout name
            </label>
            <Input
              value={pendingName}
              onChange={(e) => setPendingName(e.target.value)}
              autoFocus
              placeholder="e.g. Upper – Push"
              className="bg-[#121214]! border-[#2E2E32]! text-sm text-zinc-100 placeholder:text-zinc-500"
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setNameDialogOpen(false)}
              className="border-[#2E2E32]! bg-[#121214]! text-xs text-zinc-200 hover:bg-[#202024]! hover:text-zinc-200!"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSaveName}
              disabled={!pendingName.trim()}
              className="bg-[#A64DFF] text-xs text-white hover:bg-[#B56BFF] disabled:opacity-60"
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Exercise template picker modal (add / replace) */}
      <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
        <DialogContent className="max-w-xl border border-[#2E2E32] bg-[#1C1C1E] text-zinc-50">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium text-zinc-50">
              {pickerMode === "add" ? "Add exercise" : "Replace exercise"}
            </DialogTitle>
          </DialogHeader>

          {/* Search + filter toggle */}
          <div className="mt-3 flex items-center gap-2">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search exercises…"
              className="h-8 flex-1 border-[#2E2E32]! bg-[#121214]! text-xs text-zinc-100 placeholder:text-zinc-500"
            />
            <Button
              type="button"
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters((prev) => !prev)}
              className={`h-8 rounded-full px-3 text-[11px] ${
                showFilters
                  ? "bg-[#A64DFF]! text-white! hover:bg-[#B56BFF]!"
                  : "border-[#2E2E32]! bg-[#18181B]! text-zinc-200 hover:border-[#A64DFF]! hover:text-white! hover:bg-[#2A173F]!"
              }`}
            >
              {showFilters && "Close "}Filters
            </Button>
          </div>

          {/* Sliding layout: filters reveal from the left, list shifts right */}
          <div className="relative mt-3 h-[360px] overflow-hidden">
            {/* Filters panel */}
            <div
              className={`absolute inset-y-0 left-0 w-56 border-r border-[#2E2E32] bg-[#141416] px-3 py-3 text-[11px] transition-transform duration-200 ${
                showFilters ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-zinc-300">
                  Filters
                </span>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-[10px] text-zinc-400 hover:text-zinc-200"
                >
                  Clear
                </button>
              </div>

              <div className="space-y-3">
                {/* Equipment */}
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-wide text-zinc-500">
                    Equipment
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {EQUIPMENT_OPTIONS.map((eq) => {
                      const active = selectedEquipment.includes(eq);
                      return (
                        <button
                          key={eq}
                          type="button"
                          onClick={() => toggleEquipment(eq)}
                          className={[
                            "rounded-full border px-2 py-[2px] text-[10px] transition-colors",
                            active
                              ? "border-[#A64DFF] bg-[#2A173F] text-zinc-50"
                              : "border-[#2E2E32] bg-transparent text-zinc-300 hover:border-[#A64DFF] hover:bg-[#2A173F]/60",
                          ].join(" ")}
                        >
                          {eq}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Muscle groups */}
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-wide text-zinc-500">
                    Muscle group
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {MUSCLE_GROUP_OPTIONS.map((mg) => {
                      const active = selectedMuscleGroups.includes(mg);
                      return (
                        <button
                          key={mg}
                          type="button"
                          onClick={() => toggleMuscleGroup(mg)}
                          className={[
                            "rounded-full border px-2 py-[2px] text-[10px] transition-colors",
                            active
                              ? "border-[#A64DFF] bg-[#2A173F] text-zinc-50"
                              : "border-[#2E2E32] bg-transparent text-zinc-300 hover:border-[#A64DFF] hover:bg-[#2A173F]/60",
                          ].join(" ")}
                        >
                          {mg}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Template list (shifts right when filters open) */}
            <div
              className={`h-full space-y-2 overflow-y-auto pr-1 transition-transform duration-200 ${
                showFilters ? "translate-x-56" : "translate-x-0"
              }`}
            >
              {filteredTemplates.length === 0 ? (
                <p className="mt-2 text-xs text-zinc-400">
                  No exercises match your filters.
                </p>
              ) : (
                <div className="mt-1 grid grid-cols-1 gap-2">
                  {filteredTemplates.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleSelectTemplate(t.id)}
                      className="w-full rounded-md border border-[#2E2E32] bg-[#18181B] px-3 py-2 text-left text-xs text-zinc-100 transition-colors hover:border-[#A64DFF] hover:bg-[#2A173F]"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-medium text-sm">{t.name}</div>
                        <div className="flex items-center gap-1 text-[9px] text-zinc-500">
                          {t.muscleGroup && (
                            <span className="rounded-full border border-[#2E2E32] bg-[#121214] px-2 py-[1px]">
                              {t.muscleGroup}
                            </span>
                          )}
                          {t.equipment && (
                            <span className="rounded-full border border-[#2E2E32] bg-[#121214] px-2 py-[1px]">
                              {t.equipment}
                            </span>
                          )}
                        </div>
                      </div>
                      {t.description ? (
                        <div className="mt-1 text-[11px] text-zinc-400 line-clamp-2">
                          {t.description}
                        </div>
                      ) : null}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </>
  );
}
