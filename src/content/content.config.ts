import { defineCollection} from 'astro:content';
import { z } from "astro/zod";

const projectColletion = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        mainImage: z.string().optional(),
        technologies: z.array(
            z.object({
                name: z.string(),
                icon: z.string().optional(),
            })
        ).optional(),
        githubLink: z.string().optional(),
        liveUrl: z.string().optional(),
    })
});

export const collections = {
    projects: projectColletion,
};
