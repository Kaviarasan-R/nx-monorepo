# NxMonorepo

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
nx run client:serve (or) npx nx serve client
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
nx run-many --projects=client,server --targets=serve (or) npx nx run-many -t serve -p client server
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).
