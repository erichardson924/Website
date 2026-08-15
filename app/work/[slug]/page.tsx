/**
 * Project page at /work/lumen, /work/oak-line, /work/sunday-press, etc.
 * Next.js builds one page per item in the projects list.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { ProjectDetail } from "@/components/work/ProjectDetail";
import { getProject, projects, site } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: site.name };
  }

  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteNav experience="classic" homeHref="/" />
      <main>
        <ProjectDetail project={project} />
      </main>
      <SiteFooter experience="classic" />
    </>
  );
}
