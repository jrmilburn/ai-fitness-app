"use client"

import ProgramList from "@/components/program/ProgramList"

import type { Program } from "@/generated/prisma/client";

export default function Programs() {

    const programs: Program[] = [];

    return (
        <div className="max-w-2xl w-full mx-auto">
        <ProgramList 
            programs={programs}
        />
        </div>
    )

}