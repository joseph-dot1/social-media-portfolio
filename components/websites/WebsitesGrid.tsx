"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { websites } from "@/content/websites";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

function StatusBadge({ status }: { status: "live" | "in-progress" }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
        status === "live" ? "bg-blue text-white" : "bg-tint text-blue"
      }`}
    >
      {status === "live" ? "Live" : "In progress"}
    </span>
  );
}

export function WebsitesGrid() {
  return (
    <motion.div
      className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-2 md:px-10 md:pb-32"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {websites.map((project) => {
        const card = (
          <article className="group flex h-full flex-col gap-5 rounded-2xl border border-tint bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/25 hover:shadow-lg hover:shadow-blue/5">
            {project.image ? (
              <Image
                src={project.image.src}
                width={project.image.width}
                height={project.image.height}
                alt={project.image.alt}
                className="w-full rounded-xl border border-tint"
              />
            ) : (
              <PlaceholderBox
                label={`${project.name} screenshot`}
                className="aspect-[16/10] w-full"
              />
            )}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-semibold transition-colors duration-200 group-hover:text-blue">
                {project.name}
              </h2>
              <StatusBadge status={project.status} />
            </div>
            <p className="text-sm font-semibold text-blue">{project.role}</p>
            <p className="leading-relaxed text-mute">{project.description}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.stack.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full bg-tint px-3 py-1 text-xs font-semibold text-blue"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </article>
        );

        return (
          <motion.div key={project.id} variants={fadeUp}>
            {project.url ? (
              <a
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                {card}
              </a>
            ) : (
              card
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
