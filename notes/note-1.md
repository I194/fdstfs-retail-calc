I decided to keep everything as simple as possible.

I abandoned the idea of installing and setting up Biome, because ESLint came out of the box with this Vite setup. So I just added the recommended React rules to the ESLint config and I think this is enough for this project.

But I also did an unnecessary thing - I added a custom favicon.

The full setup took about ~30 minutes and I think this is okay, especially because I was thinking a lot about what to do and what not to. For example, it was hard to decide to keep ESLint as is. But I understand that it is not really important for this task.

I removed all unused code and static files. The structure for this project I decided to keep extremely simple: the current `src` directory with all current files in it + in future commits I will add a `src/components` directory. Each component will be an isolated feature.