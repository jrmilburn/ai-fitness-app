import { beforeEach, describe, expect, it, vi } from "vitest";

import type { ProgramTemplateWithStructure } from "@/features/programs/model/builderTypes";
import { createProgram } from "../createProgram";

const mockPrisma = {
  user: {
    findUnique: vi.fn(),
    update: vi.fn(),
  },
  programTemplate: {
    create: vi.fn(),
  },
  program: {
    create: vi.fn(),
  },
  week: {
    create: vi.fn(),
  },
};

vi.mock("@/lib/prisma", () => ({ prisma: mockPrisma }));
vi.mock("@/server/users/getOrCreateCurrentUser", () => ({
  getOrCreateCurrentUser: vi.fn(async () => ({ clerkId: "clerk-123" })),
}));

const templateWithStructure: ProgramTemplateWithStructure = {
  id: "template-1",
  name: "Starter",
  goal: "Strength",
  days: 2,
  weeks: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "user-1",
  user: null,
  aiPlanJson: null,
  structureJson: {
    days: 2,
    weeks: 1,
    workouts: [
      {
        id: "workout-1",
        name: "Workout 1",
        dayNumber: 1,
        mode: "STRENGTH",
        focusMuscleGroups: [],
        notes: null,
        exercises: [
          {
            id: "exercise-1",
            exerciseTemplateId: "tpl-1",
            exerciseType: "PRIMARY",
            sets: [
              {
                id: "set-1",
                setNumber: 1,
                type: "NORMAL",
                targetReps: 8,
                targetWeightKg: null,
                targetDurationSec: null,
              },
            ],
          },
        ],
      },
    ],
  },
} as ProgramTemplateWithStructure;

describe("createProgram", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockPrisma.user.findUnique.mockResolvedValue({ id: "user-1" });
    mockPrisma.programTemplate.create.mockResolvedValue({ id: "new-template" });
    mockPrisma.program.create.mockResolvedValue({ id: "program-1" });
    mockPrisma.week.create.mockResolvedValue({ id: "week-1" });
  });

  it("throws when a template is missing structure", async () => {
    const missingStructure = { ...templateWithStructure, structureJson: null };

    await expect(createProgram(missingStructure, false)).rejects.toThrow(
      "Program template has no structureJson"
    );
  });

  it("creates a program and nested weeks from template data", async () => {
    await createProgram(templateWithStructure, false);

    expect(mockPrisma.programTemplate.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ name: "Starter", days: 2, weeks: 1 }),
      })
    );
    expect(mockPrisma.program.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          name: "Starter",
          templateId: "new-template",
        }),
      })
    );
    expect(mockPrisma.week.create).toHaveBeenCalledTimes(1);
  });

  it("reuses an existing template when flagged", async () => {
    await createProgram(templateWithStructure, true);

    expect(mockPrisma.programTemplate.create).not.toHaveBeenCalled();
    expect(mockPrisma.program.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ templateId: "template-1" }),
      })
    );
  });
});
