lint:
  eslint ./ --ext js,ts

lint-fix:
  eslint ./ --ext js,ts --fix

prettier:
  prettier --check ./**/*.{js,ts}

prettier-fix:
  prettier --write ./**/*.{js,ts}

fix:
  make lint lint-fix prettier prettier-fix
