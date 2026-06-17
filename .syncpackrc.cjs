/** @type {import("syncpack").RcFile} */
module.exports = {
  sortFirst: ['name', 'version', 'private'],
  sortPackages: true,
  semverGroups: [
    {
      label: 'React ecosystem — must match across workspaces',
      packages: ['react', 'react-dom', '@types/react', '@types/react-dom'],
      range: '',
    },
    {
      label: 'Vite — must match across apps',
      packages: ['vite', '@vitejs/plugin-react'],
      range: '',
    },
    {
      label: 'TypeScript — must match across workspaces',
      packages: ['typescript'],
      range: '',
    },
    {
      label: 'ESLint — must match across workspaces',
      packages: ['eslint'],
      range: '',
    },
  ],
  versionGroups: [
    {
      label: 'Ignore version field of workspace packages themselves',
      packages: ['@repo/**'],
      isIgnored: true,
    },
    {
      label: 'Workspace dependencies use * protocol',
      dependencies: ['@repo/**'],
      packages: ['**'],
      pinVersion: '*',
    },
  ],
};
