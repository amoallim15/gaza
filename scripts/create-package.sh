#!/bin/bash

set -e

NAME=$1
FULL_NAME="@gaza/$NAME"
PKG_DIR="packages/$NAME"

if [ -z "$NAME" ]; then
  echo "❌ Package name is required."
  echo "Usage: ./scripts/create-package.sh gaza-core"
  exit 1
fi

if [ -d "$PKG_DIR" ]; then
  echo "❌ Package '$FULL_NAME' already exists."
  exit 1
fi

echo "📦 Creating $FULL_NAME..."

mkdir -p "$PKG_DIR/src"


# "build": "tsup src/index.ts --dts --format esm,cjs --out-dir dist",
cat > "$PKG_DIR/package.json" <<EOL
{
  "name": "$FULL_NAME",
  "version": "0.1.0",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc --emitDeclarationOnly --project tsconfig.json && tsup src/index.ts --format esm,cjs --out-dir dist",
    "dev": "tsup src/index.ts --watch",
    "test": "vitest",
    "lint": "eslint src --ext .ts",
    "format": "prettier --write \"src/**/*.{ts,json,md}\""
  }
}
EOL

cat > "$PKG_DIR/tsconfig.json" <<EOL
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
EOL

cat > "$PKG_DIR/src/index.ts" <<EOL
export const ${NAME//-/_}_hello = () => {
  return "Hello from $FULL_NAME";
};
EOL

echo "✅ Package '$FULL_NAME' created successfully at $PKG_DIR"