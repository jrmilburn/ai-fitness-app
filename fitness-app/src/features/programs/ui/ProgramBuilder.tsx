"use client";

import * as React from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import type { ExerciseTemplate } from "@prisma/client";
import type { ProgramTemplateWithStructure } from "@/features/programs/model/builderTypes";
import { useProgramBuilderState } from "@/features/programs/hooks/useProgramBuilderState";
import { useWorkoutDragDrop } from "@/features/programs/hooks/useWorkoutDragDrop";

import { MoreVerticalIcon } from "lucide-react";

import { WorkoutColumn } from "./WorkoutColumn";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/shared/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";

type ProgramBuilderProps = {
  initialTemplate?: ProgramTemplateWithStructure | null;
  exerciseTemplates: ExerciseTemplate[];
  onSubmit: (
    payload: ProgramTemplateWithStructure,   // ✅ no `| null`
    existingTemplate: boolean
  ) => Promise<void> | void;
};


export function ProgramBuilder({
  initialTemplate,
  exerciseTemplates,
  onSubmit,
}: ProgramBuilderProps) {
  const {
    state,
    programName,
    isNameDialogOpen,
    pendingName,
    submitting,
    error,
    activeWorkoutId,
    activeWorkout,
    activeWorkoutExercises,
    activeWorkoutIndex,
    actions,
    setPendingName,
    setIsNameDialogOpen,
    setActiveWorkoutId,
    openNameDialog,
    saveProgramName,
    submit,
  } = useProgramBuilderState(initialTemplate ?? null, onSubmit);

  const { handleDragEnd } = useWorkoutDragDrop(state, {
    reorderWorkouts: actions.reorderWorkouts,
    reorderExercises: actions.reorderExercises,
    moveExerciseToWorkout: actions.moveExerciseToWorkout,
  });

  const {
    addWorkout,
    addExerciseToWorkout,
    addSetToExercise,
    removeSetFromExercise,
    renameWorkout,
    replaceExercise,
    deleteExercise,
    deleteWorkout,
  } = actions;

  return (
    <div className="flex h-full flex-col md:pt-4">
      <div className="flex h-full flex-col rounded-xl border border-[var(--border-strong)] bg-[var(--surface-tertiary)] shadow-sm">
        {/* header / controls */}
        <div className="flex items-start justify-between gap-4 rounded-t-xl border-b border-[var(--border-strong)] bg-[var(--surface-secondary)] px-6 py-4">
          {/* Left: program name */}
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-[var(--text-strong)]">
              {programName}
            </h2>
            {/* optional helper text later if you want */}
          </div>

          {/* Right: menu + primary action */}
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={submit}
              variant="default"
              disabled={submitting}
              className="rounded-md border-0 bg-[#A64DFF] px-4 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Creating…" : "Create program"}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-strong)] hover:bg-[var(--surface-tertiary)] hover:text-[var(--text-strong)]"
                >
                  <MoreVerticalIcon className="h-4 w-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border-[var(--border-strong)] bg-[var(--surface-secondary)] text-xs text-[var(--text-strong)]"
              >
                <DropdownMenuItem
                  onClick={openNameDialog}
                  className="cursor-pointer text-xs hover:bg-[var(--surface-accent)]"
                >
                  Rename program
                </DropdownMenuItem>
                {/* future options can go here */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* name dialog */}
        <Dialog open={isNameDialogOpen} onOpenChange={setIsNameDialogOpen}>
          <DialogContent className="bg-[var(--surface-secondary)] border-[var(--border-strong)]">
            <DialogHeader>
              <DialogTitle className="text-[var(--text-strong)]">
                Rename program
              </DialogTitle>
            </DialogHeader>
            <div className="mt-3 space-y-2">
              <label className="text-xs font-medium text-[var(--text-muted)]">
                Program name
              </label>
              <Input
                value={pendingName}
                autoFocus
                onChange={(e) => setPendingName(e.target.value)}
                placeholder="e.g. 6-Week Strength Builder"
                className="bg-[var(--surface-tertiary)]! border-[var(--border-strong)]! text-sm text-[var(--text-strong)] placeholder:text-[var(--text-strong)]"
              />
            </div>
            <DialogFooter className="mt-4 flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsNameDialogOpen(false)}
                className="border-[var(--border-strong)]! bg-[var(--surface-tertiary)]! text-xs text-[var(--text-muted)] hover:bg-[#202024]! hover:text-white!"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={saveProgramName}
                disabled={!pendingName.trim()}
                className="bg-[#A64DFF]! text-xs text-white hover:bg-[#B56BFF]! disabled:opacity-60"
              >
                Save name
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* loading + error */}
        {(submitting || error) && (
          <div className="space-y-2 border-b border-[var(--border-strong)] bg-[var(--surface-secondary)] px-6 py-3">
            {submitting && (
              <div className="flex flex-col gap-1 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-tertiary)] px-4 py-3 text-xs text-[var(--text-muted)]">
                <p className="font-medium text-[var(--text-strong)]">
                  Saving your program…
                </p>
                <p className="text-[0.7rem] text-[var(--text-muted)]">
                  We’re creating your program so it’s ready to use on the
                  workout page.
                </p>
              </div>
            )}

            {error && (
              <div className="flex flex-col gap-1 rounded-lg border border-red-500/70 bg-red-500/10 px-4 py-3 text-xs">
                <p className="font-medium text-red-300">
                  Something went wrong.
                </p>
                <p className="text-[0.7rem] text-red-200">{error}</p>
              </div>
            )}
          </div>
        )}

        <DragDropContext onDragEnd={handleDragEnd}>
          {/* Desktop: multi-column builder */}
          <Droppable
            droppableId="all-workouts"
            direction="horizontal"
            type="workout"
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="hidden flex-1 items-start gap-4 overflow-x-auto px-6 py-4 md:flex"
              >
                {state.workoutOrder.map((workoutId, index) => {
                  const workout = state.workouts[workoutId];
                  const exercises = workout.exerciseIds.map(
                    (id) => state.exercises[id]
                  );

                  return (
                    <WorkoutColumn
                      key={workout.id}
                      workout={workout}
                      exercises={exercises}
                      index={index}
                      exerciseTemplates={exerciseTemplates}
                      onAddExercise={addExerciseToWorkout}
                      onAddSetToExercise={addSetToExercise}
                      onRenameWorkout={renameWorkout}
                      onReplaceExercise={replaceExercise}
                      onDeleteExercise={deleteExercise}
                      onDeleteWorkout={deleteWorkout}
                      onRemoveSetFromExercise={removeSetFromExercise}
                    />
                  );
                })}

                {provided.placeholder}

                <Button
                  type="button"
                  onClick={addWorkout}
                  variant="outline"
                  disabled={submitting}
                  className="mt-2 flex w-[210px] flex-col items-center justify-center self-start rounded-lg border border-dashed border-[var(--border-subtle)] bg-transparent px-3 py-3 text-xs font-medium text-[var(--text-muted)] transition-colors hover:border-[#A64DFF] hover:bg-[var(--surface-accent)] hover:text-white"
                >
                  + Add workout
                </Button>
              </div>
            )}
          </Droppable>

          {/* Mobile: tabbed days + single column */}
          <div className="flex flex-1 flex-col border-t border-[var(--border-strong)] md:px-4 py-3 md:hidden">
            {state.workoutOrder.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                <p className="text-sm font-medium text-[var(--text-muted)]">
                  This week has no workouts yet.
                </p>
                <Button
                  type="button"
                  onClick={addWorkout}
                  className="rounded-full bg-[#A64DFF] px-5 py-2 text-xs font-medium text-white hover:bg-[#B56BFF]"
                >
                  + Add first workout
                </Button>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="mb-3 flex flex-wrap items-center justify-center gap-2 pb-1">
                  {state.workoutOrder.map((id, idx) => {
                    const isActive = id === activeWorkoutId;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setActiveWorkoutId(id)}
                        className={[
                          "flex min-w-[96px] flex-col items-center justify-center rounded-xl px-3 py-2 text-xs font-medium transition-colors",
                          isActive
                            ? "bg-[var(--surface-tertiary)] text-[var(--text-strong)] shadow-sm border border-[#A64DFF]"
                            : "bg-[var(--surface-secondary)] text-[var(--text-muted)] border border-[var(--border-strong)]",
                        ].join(" ")}
                      >
                        <span className="text-[0.7rem] uppercase tracking-wide">
                          Day {idx + 1}
                        </span>
                      </button>
                    );
                  })}

                  <Button
                    type="button"
                    onClick={addWorkout}
                    variant="outline"
                    disabled={submitting}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-[var(--border-subtle)] bg-[var(--surface-secondary)] text-[var(--text-muted)] hover:border-[#A64DFF] hover:bg-[var(--surface-accent)]"
                  >
                    +
                  </Button>
                </div>

                {/* Active workout */}
                {activeWorkout && (
                  <div className="pb-2">
                    <WorkoutColumn
                      workout={activeWorkout}
                      exercises={activeWorkoutExercises}
                      index={activeWorkoutIndex}
                      exerciseTemplates={exerciseTemplates}
                      onAddExercise={addExerciseToWorkout}
                      onAddSetToExercise={addSetToExercise}
                      onDeleteWorkout={deleteWorkout}
                      onDeleteExercise={deleteExercise}
                      onReplaceExercise={replaceExercise}
                      onRenameWorkout={renameWorkout}
                      onRemoveSetFromExercise={removeSetFromExercise}
                      draggable={false}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
