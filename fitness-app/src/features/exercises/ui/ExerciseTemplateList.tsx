"use client";

import * as React from "react";
import type {
  ExerciseTemplate,
  ExerciseType,
  Equipment,
  MuscleGroup,
} from "@prisma/client";
import { MoreVertical } from "lucide-react";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";
import { Input } from "@/shared/ui/input";
import { useRouter } from "next/navigation";

// TODO: implement these on the server and adjust imports as needed
import { createExerciseTemplate } from "@/server/exercises/createExerciseTemplate";
import { updateExerciseTemplate } from "@/server/exercises/updateExerciseTemplate";
import { deleteExerciseTemplate } from "@/server/exercises/deleteExerciseTemplate";

type ExerciseTemplateListProps = {
  templates: ExerciseTemplate[];
};

export default function ExerciseTemplateList({
  templates,
}: ExerciseTemplateListProps) {
  const router = useRouter();

  const [activeTab, setActiveTab] = React.useState<"sp" | "saved">("sp");

  const spTemplates = templates.filter((t) => t.sptemplate === true);
  const userTemplates = templates.filter((t) => !t.sptemplate);

  const visibleTemplates = activeTab === "sp" ? spTemplates : userTemplates;

  // ---- create modal state ----
  const [createOpen, setCreateOpen] = React.useState(false);

  // ---- edit modal state ----
  const [editOpen, setEditOpen] = React.useState(false);
  const [editingTemplate, setEditingTemplate] =
    React.useState<ExerciseTemplate | null>(null);

  // ---- delete confirm modal state ----
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [templateToDelete, setTemplateToDelete] =
    React.useState<ExerciseTemplate | null>(null);
  const [deleting, setDeleting] = React.useState(false);

  // ---- create / edit form shared state ----
  const [formName, setFormName] = React.useState("");
  const [formDescription, setFormDescription] = React.useState("");
  const [formExerciseType, setFormExerciseType] =
    React.useState<ExerciseType>("STRENGTH");
  const [formEquipment, setFormEquipment] =
    React.useState<Equipment | null>(null);
  const [formMuscleGroup, setFormMuscleGroup] =
    React.useState<MuscleGroup | null>(null);

  const [formDefaultSets, setFormDefaultSets] = React.useState<string>("");
  const [formDefaultRepsLower, setFormDefaultRepsLower] =
    React.useState<string>("");
  const [formDefaultRepsUpper, setFormDefaultRepsUpper] =
    React.useState<string>("");
  const [formDefaultRir, setFormDefaultRir] = React.useState<string>("");
  const [formTimeSeconds, setFormTimeSeconds] = React.useState<string>("");

  const [saving, setSaving] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);

  const EXERCISE_TYPE_OPTIONS = React.useMemo(
    () => ["STRENGTH", "CARDIO_STEADY", "CARDIO_INTERVAL"] as ExerciseType[],
    []
  );
  const EQUIPMENT_OPTIONS = React.useMemo(
    () =>
      ["Barbell", "Dumbbell", "Cable", "Kettlebell", "Bodyweight", "Machine"] as Equipment[],
    []
  );
  const MUSCLE_GROUP_OPTIONS = React.useMemo(
    () =>
      [
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
      ] as MuscleGroup[],
    []
  );

    // ---- search + filters ----
  const [search, setSearch] = React.useState("");
  const [showFilters, setShowFilters] = React.useState(false);
  const [selectedEquipment, setSelectedEquipment] = React.useState<Equipment[]>([]);
  const [selectedMuscleGroups, setSelectedMuscleGroups] = React.useState<MuscleGroup[]>([]);

  const toggleEquipment = (eq: Equipment) => {
    setSelectedEquipment((prev) =>
      prev.includes(eq) ? prev.filter((e) => e !== eq) : [...prev, eq]
    );
  };

  const toggleMuscleGroup = (mg: MuscleGroup) => {
    setSelectedMuscleGroups((prev) =>
      prev.includes(mg) ? prev.filter((m) => m !== mg) : [...prev, mg]
    );
  };

  const clearFilters = () => {
    setSelectedEquipment([]);
    setSelectedMuscleGroups([]);
    setSearch("");
  };

  const filteredTemplates = React.useMemo(() => {
    return visibleTemplates.filter((t) => {
      // text search (name + description + muscle group)
      if (search.trim()) {
        const q = search.toLowerCase();
        const inName = t.name.toLowerCase().includes(q);
        const inDesc = t.description
          ? t.description.toLowerCase().includes(q)
          : false;
        const inMg = t.muscleGroup
          ? t.muscleGroup.toLowerCase().includes(q)
          : false;

        if (!inName && !inDesc && !inMg) return false;
      }

      // equipment filter
      if (
        selectedEquipment.length > 0 &&
        (!t.equipment || !selectedEquipment.includes(t.equipment))
      ) {
        return false;
      }

      // muscle group filter
      if (
        selectedMuscleGroups.length > 0 &&
        (!t.muscleGroup || !selectedMuscleGroups.includes(t.muscleGroup))
      ) {
        return false;
      }

      return true;
    });
  }, [visibleTemplates, search, selectedEquipment, selectedMuscleGroups]);


  // ---- helpers ----
  const resetForm = () => {
    setFormName("");
    setFormDescription("");
    setFormExerciseType("STRENGTH");
    setFormEquipment(null);
    setFormMuscleGroup(null);
    setFormDefaultSets("");
    setFormDefaultRepsLower("");
    setFormDefaultRepsUpper("");
    setFormDefaultRir("");
    setFormTimeSeconds("");
    setFormError(null);
  };

  const openCreateModal = () => {
    resetForm();
    setEditingTemplate(null);
    setCreateOpen(true);
  };

  const openEditModal = (template: ExerciseTemplate) => {
    setEditingTemplate(template);
    setFormName(template.name);
    setFormDescription(template.description ?? "");
    setFormExerciseType(template.exerciseType);
    setFormEquipment(template.equipment ?? null);
    setFormMuscleGroup(template.muscleGroup ?? null);
    setFormDefaultSets(
      template.defaultSets != null ? template.defaultSets.toString() : ""
    );
    setFormDefaultRepsLower(
      template.defaultRepsLower != null
        ? template.defaultRepsLower.toString()
        : ""
    );
    setFormDefaultRepsUpper(
      template.defaultRepsUpper != null
        ? template.defaultRepsUpper.toString()
        : ""
    );
    setFormDefaultRir(
      template.defaultRir != null ? template.defaultRir.toString() : ""
    );
    setFormTimeSeconds(
      template.timeSeconds != null ? template.timeSeconds.toString() : ""
    );

    setFormError(null);
    setEditOpen(true);
  };

  const openDeleteModal = (template: ExerciseTemplate) => {
    setTemplateToDelete(template);
    setDeleteOpen(true);
  };

  // ---- create / edit submit ----
  const handleSubmitForm = async (mode: "create" | "edit") => {
    if (!formName.trim()) {
      setFormError("Name is required.");
      return;
    }

    setSaving(true);
    setFormError(null);

    const payload = {
      name: formName.trim(),
      description: formDescription.trim() || null,
      exerciseType: formExerciseType,
      equipment: formEquipment,
      muscleGroup: formMuscleGroup,
      defaultSets: formDefaultSets ? Number(formDefaultSets) : null,
      defaultRepsLower: formDefaultRepsLower
        ? Number(formDefaultRepsLower)
        : null,
      defaultRepsUpper: formDefaultRepsUpper
        ? Number(formDefaultRepsUpper)
        : null,
      defaultRir: formDefaultRir ? Number(formDefaultRir) : null,
      timeSeconds: formTimeSeconds ? Number(formTimeSeconds) : null,
    };

    try {
      if (mode === "create") {
        await createExerciseTemplate(payload);
      } else if (mode === "edit" && editingTemplate) {
        await updateExerciseTemplate(editingTemplate.id, payload);
      }

      router.refresh();
      if (mode === "create") {
        setCreateOpen(false);
      } else {
        setEditOpen(false);
      }
      resetForm();
    } catch (err: any) {
      console.error(err);
      setFormError(
        err?.message ?? "Something went wrong saving this exercise template."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!templateToDelete) return;

    setDeleting(true);
    try {
      await deleteExerciseTemplate(templateToDelete.id);
      router.refresh();
      setDeleteOpen(false);
      setTemplateToDelete(null);
    } catch (err) {
      console.error("Failed to delete exercise template", err);
      // optional: show error UI
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-lg text-[var(--text-strong)]">Exercise Templates</h3>
        <Button
          type="button"
          onClick={openCreateModal}
          className="rounded-md bg-[#A64DFF] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF]"
        >
          New +
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 md:px-0">
        <button
          type="button"
          onClick={() => setActiveTab("sp")}
          className={[
            "flex-1 cursor-pointer rounded-full px-3 py-2 text-xs font-medium transition-colors",
            activeTab === "sp"
              ? "border border-[#A64DFF] text-[var(--text-strong)]"
              : "border border-[var(--border-strong)] bg-[var(--surface-secondary)] text-[var(--text-muted)] hover:bg-[var(--surface-accent)]/40",
          ].join(" ")}
        >
          SP Exercises
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={[
            "flex-1 cursor-pointer rounded-full px-3 py-2 text-xs font-medium transition-colors",
            activeTab === "saved"
              ? "border border-[#A64DFF] text-[var(--text-strong)]"
              : "border border-[var(--border-strong)] bg-[var(--surface-secondary)] text-[var(--text-muted)] hover:bg-[var(--surface-accent)]/40",
          ].join(" ")}
        >
          Saved exercises
        </button>
      </div>

      {/* Search + filter toggle */}
      <div className="mt-2 flex items-center gap-2 px-4 md:px-0">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search exercises…"
          className="h-8 flex-1 border-[var(--border-strong)]! bg-[var(--surface-tertiary)]! text-xs text-[var(--text-strong)] placeholder:text-[var(--text-strong)]"
        />
        <Button
          type="button"
          variant={showFilters ? "default" : "outline"}
          onClick={() => setShowFilters((prev) => !prev)}
          className={`h-8 rounded-full px-3 text-[11px] ${
            showFilters
              ? "bg-[#A64DFF]! text-white! hover:bg-[#B56BFF]!"
              : "border-[var(--border-strong)]! bg-[var(--surface-secondary)]! text-[var(--text-muted)] hover:border-[#A64DFF]! hover:text-white! hover:bg-[var(--surface-accent)]!"
          }`}
        >
          {showFilters && "Close "}Filters
        </Button>
      </div>

      {/* Filters + list (same sliding behaviour as modal) */}
      <div className="relative mt-3 px-4 md:px-0 overflow-hidden">
        {/* Filters panel */}
        <div
          className={`absolute inset-y-0 left-0 w-[95%] md:w-56 border-r border-[var(--border-strong)] bg-[var(--surface-tertiary)] px-3 py-3 text-[11px] transition-transform duration-200 ${
            showFilters ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[var(--text-muted)]">
              Filters
            </span>
            <button
              type="button"
              onClick={clearFilters}
              className="text-[10px] text-[var(--text-muted)] hover:text-[var(--text-muted)]"
            >
              Clear
            </button>
          </div>

          <div className="space-y-3">
            {/* Equipment */}
            <div>
              <div className="mb-1 text-[10px] uppercase tracking-wide text-[var(--text-strong)]">
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
                          ? "border-[#A64DFF] bg-[var(--surface-accent)] text-[var(--text-strong)]"
                          : "border-[var(--border-strong)] bg-transparent text-[var(--text-muted)] hover:border-[#A64DFF] hover:bg-[var(--surface-accent)]/60",
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
              <div className="mb-1 text-[10px] uppercase tracking-wide text-[var(--text-strong)]">
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
                          ? "border-[#A64DFF] bg-[var(--surface-accent)] text-[var(--text-strong)]"
                          : "border-[var(--border-strong)] bg-transparent text-[var(--text-muted)] hover:border-[#A64DFF] hover:bg-[var(--surface-accent)]/60",
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
          className={`flex flex-col gap-2 transition-transform duration-200 ${
            showFilters ? "translate-x-[100%]" : "translate-x-0"
          }`}
        >
          {visibleTemplates.length === 0 ? (
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {activeTab === "sp"
                ? "No SP exercises available yet."
                : "You have no saved exercise templates yet. Create one to get started."}
            </p>
          ) : filteredTemplates.length === 0 ? (
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              No exercises match your filters.
            </p>
          ) : (
            filteredTemplates.map((t) => (
              <ExerciseTemplateRow
                key={t.id}
                template={t}
                showActions={activeTab === "saved"}
                onEdit={() => openEditModal(t)}
                onDelete={() => openDeleteModal(t)}
              />
            ))
          )}
        </div>
      </div>



      {/* Create modal */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="max-w-md border border-[var(--border-strong)] bg-[var(--surface-tertiary)] text-[var(--text-strong)]">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium">
              New exercise template
            </DialogTitle>
            <DialogDescription className="text-xs text-[var(--text-muted)]">
              Stored under Saved Exercises
            </DialogDescription>
          </DialogHeader>

          <ExerciseTemplateForm
            mode="create"
            name={formName}
            description={formDescription}
            exerciseType={formExerciseType}
            equipment={formEquipment}
            muscleGroup={formMuscleGroup}
            onChangeName={setFormName}
            onChangeDescription={setFormDescription}
            onChangeExerciseType={setFormExerciseType}
            onChangeEquipment={setFormEquipment}
            onChangeMuscleGroup={setFormMuscleGroup}
            exerciseTypeOptions={EXERCISE_TYPE_OPTIONS}
            equipmentOptions={EQUIPMENT_OPTIONS}
            muscleGroupOptions={MUSCLE_GROUP_OPTIONS}
            saving={saving}
            error={formError}
            onSubmit={() => handleSubmitForm("create")}
            onCancel={() => setCreateOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Edit modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-md border border-[var(--border-strong)] bg-[var(--surface-tertiary)] text-[var(--text-strong)]">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium">
              Edit exercise template
            </DialogTitle>
            <DialogDescription className="text-xs text-[var(--text-muted)]">
              Changes will apply wherever this exercise template is used going
              forward.
            </DialogDescription>
          </DialogHeader>

          <ExerciseTemplateForm
            mode="edit"
            name={formName}
            description={formDescription}
            exerciseType={formExerciseType}
            equipment={formEquipment}
            muscleGroup={formMuscleGroup}
            onChangeName={setFormName}
            onChangeDescription={setFormDescription}
            onChangeExerciseType={setFormExerciseType}
            onChangeEquipment={setFormEquipment}
            onChangeMuscleGroup={setFormMuscleGroup}
            exerciseTypeOptions={EXERCISE_TYPE_OPTIONS}
            equipmentOptions={EQUIPMENT_OPTIONS}
            muscleGroupOptions={MUSCLE_GROUP_OPTIONS}
            saving={saving}
            error={formError}
            onSubmit={() => handleSubmitForm("edit")}
            onCancel={() => setEditOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Delete confirmation modal */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="max-w-md border border-[var(--border-strong)] bg-[var(--surface-tertiary)] text-[var(--text-strong)]">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium">
              Delete exercise template?
            </DialogTitle>
            <DialogDescription className="text-xs text-[var(--text-muted)]">
              Deleting this exercise template may affect saved program templates
              that use this exercise. Existing programs won&apos;t be deleted,
              but they may no longer reference this template correctly.
            </DialogDescription>
          </DialogHeader>

          <p className="mt-3 text-xs text-[var(--text-muted)]">
            {templateToDelete?.name}
          </p>

          <div className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={deleting}
              onClick={() => setDeleteOpen(false)}
              className="border-[var(--border-strong)] bg-[var(--surface-secondary)] text-xs text-[var(--text-strong)] hover:bg-[var(--surface-accent)]"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              disabled={deleting}
              onClick={handleConfirmDelete}
              className="text-xs"
            >
              {deleting ? "Deleting…" : "Delete template"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// =========================
// Row component
// =========================

function ExerciseTemplateRow({
  template,
  showActions,
  onEdit,
  onDelete,
}: {
  template: ExerciseTemplate;
  showActions: boolean;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="group relative flex w-full items-center justify-between rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-4 py-3 pr-10 transition-all hover:border-[#A64DFF]/60 hover:bg-[var(--surface-accent)]/40">
      <div className="flex flex-col gap-1">
        <h3 className="max-w-[320px] truncate text-sm font-medium text-[var(--text-strong)]">
          {template.name}
        </h3>
        <div className="flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-wide text-[var(--text-muted)]">
          {template.muscleGroup && (
            <span className="rounded-full border border-[var(--border-strong)] bg-[var(--surface-tertiary)] px-2 py-[2px]">
              {template.muscleGroup}
            </span>
          )}
          {template.equipment && (
            <span className="rounded-full border border-[var(--border-strong)] bg-[var(--surface-tertiary)] px-2 py-[2px]">
              {template.equipment}
            </span>
          )}
          <span>{template.exerciseType}</span>
        </div>
      </div>

      {showActions && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
                variant="ghost"
                className="
                absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 
                items-center justify-center rounded-full
                text-[var(--text-muted)]
                hover:bg-[var(--surface-tertiary)] hover:text-[var(--text-strong)]
                focus-visible:opacity-100 focus-visible:pointer-events-auto
                transition z-[9999]
              "
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="border-[var(--border-strong)] bg-[var(--surface-tertiary)] text-xs text-[var(--text-strong)]"
          >
            <DropdownMenuItem
              onClick={onEdit}
              className="cursor-pointer text-xs hover:bg-[var(--surface-accent)]"
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onDelete}
              className="cursor-pointer text-xs text-red-600 hover:bg-red-500/10! hover:text-red-600!"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      )}
    </div>
  );
}

// =========================
// Form subcomponent
// =========================

type ExerciseTemplateFormProps = {
  mode: "create" | "edit";
  name: string;
  description: string;
  exerciseType: ExerciseType;
  equipment: Equipment | null;
  muscleGroup: MuscleGroup | null;
  onChangeName: (v: string) => void;
  onChangeDescription: (v: string) => void;
  onChangeExerciseType: (v: ExerciseType) => void;
  onChangeEquipment: (v: Equipment | null) => void;
  onChangeMuscleGroup: (v: MuscleGroup | null) => void;
  exerciseTypeOptions: ExerciseType[];
  equipmentOptions: Equipment[];
  muscleGroupOptions: MuscleGroup[];
  saving: boolean;
  error: string | null;
  onSubmit: () => void;
  onCancel: () => void;
};

function ExerciseTemplateForm({
  mode,
  name,
  description,
  exerciseType,
  equipment,
  muscleGroup,
  onChangeName,
  onChangeDescription,
  onChangeExerciseType,
  onChangeEquipment,
  onChangeMuscleGroup,
  exerciseTypeOptions,
  equipmentOptions,
  muscleGroupOptions,
  saving,
  error,
  onSubmit,
  onCancel,
}: ExerciseTemplateFormProps) {

  return (
    <div className="mt-3 space-y-3 text-xs">
      <div className="space-y-1">
        <label className="text-[0.7rem] font-medium text-[var(--text-strong)]">
          Name
        </label>
        <Input
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          placeholder="e.g. Barbell Back Squat"
          className="h-8 border-[var(--border-strong)] bg-[var(--surface-secondary)]! text-xs text-[var(--text-strong)] placeholder:text-[var(--text-muted)]"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[0.7rem] font-medium text-[var(--text-strong)]">
          Description
        </label>
        <Input
          value={description}
          onChange={(e) => onChangeDescription(e.target.value)}
          placeholder="Optional notes, cues, tempo..."
          className="h-8 border-[var(--border-strong)] bg-[var(--surface-secondary)]! text-xs text-[var(--text-strong)] placeholder:text-[var(--text-muted)]"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1">
          <label className="text-[0.7rem] font-medium text-[var(--text-strong)]">
            Type
          </label>
          <select
            value={exerciseType}
            onChange={(e) => onChangeExerciseType(e.target.value as ExerciseType)}
            className="h-8 w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-2 text-xs text-[var(--text-strong)]"
          >
            {exerciseTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[0.7rem] font-medium text-[var(--text-strong)]">
            Muscle group
          </label>
          <select
            value={muscleGroup ?? ""}
            onChange={(e) =>
              onChangeMuscleGroup(
                e.target.value ? (e.target.value as MuscleGroup) : null
              )
            }
            className="h-8 w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-2 text-xs text-[var(--text-strong)]"
          >
            <option value="">None</option>
            {muscleGroupOptions.map((mg) => (
              <option key={mg} value={mg}>
                {mg}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[0.7rem] font-medium text-[var(--text-strong)]">
            Equipment
          </label>
          <select
            value={equipment ?? ""}
            onChange={(e) =>
              onChangeEquipment(
                e.target.value ? (e.target.value as Equipment) : null
              )
            }
            className="h-8 w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-2 text-xs text-[var(--text-strong)]"
          >
            <option value="">None</option>
            {equipmentOptions.map((eq) => (
              <option key={eq} value={eq}>
                {eq}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <p className="mt-1 text-[0.7rem] text-red-400">
          {error}
        </p>
      )}

      <div className="mt-3 flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          disabled={saving}
          onClick={onCancel}
          className="border-[var(--border-strong)] bg-[var(--surface-secondary)] text-xs text-[var(--text-strong)] hover:bg-[var(--surface-accent)]"
        >
          Cancel
        </Button>
        <Button
          type="button"
          disabled={saving}
          onClick={onSubmit}
          className="bg-[#A64DFF] text-xs text-white hover:bg-[#B56BFF] disabled:opacity-60"
        >
          {saving
            ? mode === "create"
              ? "Creating…"
              : "Saving…"
            : mode === "create"
            ? "Create template"
            : "Save changes"}
        </Button>
      </div>
    </div>
  );
}
