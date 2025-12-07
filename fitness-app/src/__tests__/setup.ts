import React from "react";
import matchers from "@testing-library/jest-dom/matchers";
import { expect, vi } from "vitest";

expect.extend(matchers);

vi.mock("next/navigation", () => {
  const mockRouter = {
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  };

  return {
    useRouter: () => mockRouter,
    usePathname: () => "/",
    useSearchParams: () => new URLSearchParams(),
    redirect: vi.fn(),
    mockRouter,
  };
});

vi.mock("@hello-pangea/dnd", () => {
  const Droppable = ({ children }: { children: any }) =>
    children(
      {
        droppableProps: { "data-testid": "droppable" },
        innerRef: vi.fn(),
        placeholder: null,
      },
      {}
    );

  const Draggable = ({ children, draggableId }: { children: any; draggableId: string }) =>
    children(
      {
        draggableProps: { "data-testid": `draggable-${draggableId}` },
        dragHandleProps: {},
        innerRef: vi.fn(),
      },
      { isDragging: false }
    );

  const DragDropContext = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dnd-context">{children}</div>
  );

  return { __esModule: true, DragDropContext, Droppable, Draggable };
});

// Prevent errors when components call scrollIntoView in JSDOM
Element.prototype.scrollIntoView = vi.fn();
