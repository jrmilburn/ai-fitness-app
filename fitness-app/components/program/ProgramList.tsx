"use client"

import type { Program } from "@/generated/prisma/client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ProgramList({ programs } : { programs : Program[]}) {

    return (
        <div className="max-w-2xl w-full flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Programs</h3>
                <Link href="/programs/plan"><Button>New +</Button></Link>
            </div>
            {programs.length === 0 && (
                <h3>You have no programs. Create one to get started.</h3>
            )}
            {programs.map((program) => (
                <ProgramListItem 
                    key={program.id}
                    program={program}
                />
            ))}
        </div>
    )

}

function ProgramListItem({ program } : { program : Program }) {

    return (
        <Link className="w-full border-b flex justify-between border-b border-black/5 group py-2" href={`/programs/new?templateId=${program.id}`}>
            <div className="flex flex-col gap-1">
                <h3 className="text-md">{program.name}</h3>
                <div className="flex gap-2">
                    <p className="text-sm opacity-60 uppercase">{program.goal}</p>
                    <p className="text-sm opacity-60 uppercase">{program.length} weeks, {program.days} days</p>
                </div>
            </div>
            <ChevronRight 
                width={16}
                className="group-hover:translate-x-[2px] transition-all"
            />
        </Link>
    )

}