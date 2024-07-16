# NxMonorepo

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
nx run client:serve (or) npx nx serve client
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2> -p <project1> <project2>
nx run-many --projects=client,server --targets=serve (or) npx nx run-many -t serve -p client server
```

To add a lib:

```
nx g @nx/nest:lib <project> --buildable --publishable
```

To remove a lib:

```
nx g @nx/workspace:remove <project> --force-remove
```

## Key Notes

By default, Nx will load any environment variables you place in the following files: [Environment variables](https://nx.dev/recipes/tips-n-tricks/define-environment-variables#define-environment-variables)
For example we use, .env.serve.development & .env.serve.production

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).
