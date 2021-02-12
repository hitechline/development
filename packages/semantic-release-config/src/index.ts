/* eslint-disable no-template-curly-in-string */

const semanticReleaseConfig = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm',
      {
        tarballDir: '.tarball',
      },
    ],
    [
      '@semantic-release/git',
      {
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        assets: [
          'CHANGELOG.md',
          'package.json',
          'package-lock.json',
          'npm-shrinkwrap.json',
        ],
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: '.tarball/*.tgz',
      },
    ],
  ],
};

export = semanticReleaseConfig;
