lint:
  eslint ./ --ext js,ts,tsx

lint-fix:
  eslint ./ --ext js,ts,tsx --fix

prettier:
  prettier --check ./**/*.{js,ts,tsx}

prettier-fix:
  prettier --write ./**/*.{js,ts,tsx}

fix:
  make lint-fix prettier-fix
