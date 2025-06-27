import { defineCollection, z } from 'astro:content';

export const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).optional(),
    cover: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

export const collections = {
  projects,
};