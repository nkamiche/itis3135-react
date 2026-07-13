### Automatic deployment (GitHub Actions)

1. Push to the `main` branch.
2. The workflow publishes the built `dist` folder to the `gh-pages` branch.
3. In GitHub, open **Settings → Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Choose branch **`gh-pages`** and folder **`/ (root)`**.
6. Save.

After the first successful workflow run, the site will be available at:

**https://nkamiche.github.io/itis3135-react/**
