import { render, screen, fireEvent } from "@testing-library/react";
import type { ExerciseTemplate } from "@prisma/client";
import { mockRouter } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { ProgramTemplateWithStructure } from "@/features/programs/model/builderTypes";
import { ProgramBuilder } from "../ui/ProgramBuilder";

const exerciseTemplates = [] as unknown as ExerciseTemplate[];

describe("ProgramBuilder", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders default workouts and allows adding a workout", () => {
    render(
      <ProgramBuilder
        exerciseTemplates={exerciseTemplates}
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByText("Workout 1")).toBeInTheDocument();
    expect(screen.getByText("Workout 2")).toBeInTheDocument();

    fireEvent.click(screen.getByText("+ Add workout"));

    expect(screen.getByText("Workout 3")).toBeInTheDocument();
  });

  it("submits and redirects with initial template data", async () => {
    const template: ProgramTemplateWithStructure = {
      id: "template-1",
      name: "Strength Starter",
      goal: "Strength",
      days: 3,
      weeks: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: "user-1",
      user: null,
      aiPlanJson: null,
      structureJson: {
        days: 3,
        weeks: 2,
        workouts: [],
      },
    } as ProgramTemplateWithStructure;

    const onSubmit = vi.fn();

    render(
      <ProgramBuilder
        initialTemplate={template}
        exerciseTemplates={exerciseTemplates}
        onSubmit={onSubmit}
      />
    );

    expect(screen.getByText("Strength Starter")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Create program" }));

    expect(onSubmit).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith("/workout");
  });
});
