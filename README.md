# 🏷🌈 Color Labels Action

Automatically color all labels in your repository.

[![Build CI](https://github.com/AnandChowdhary/color-labels-action/workflows/Build%20CI/badge.svg)](https://github.com/AnandChowdhary/color-labels-action/actions?query=workflow%3A%22Build+CI%22)
[![Test CI](https://github.com/AnandChowdhary/color-labels-action/workflows/Test%20CI/badge.svg)](https://github.com/AnandChowdhary/color-labels-action/actions?query=workflow%3A%22Test+CI%22)
[![Release CI](https://github.com/AnandChowdhary/color-labels-action/workflows/Release%20CI/badge.svg)](https://github.com/AnandChowdhary/color-labels-action/actions?query=workflow%3A%22Release+CI%22)
[![Node CI](https://github.com/AnandChowdhary/color-labels-action/workflows/Node%20CI/badge.svg)](https://github.com/AnandChowdhary/color-labels-action/actions?query=workflow%3A%22Node+CI%22)

<img width="1227" alt="Screenshot of GitHub issues page with colored labels" src="https://user-images.githubusercontent.com/2841780/195546565-18e7018c-0c7d-487b-a195-efe8f1033274.png">

## ⭐ How it works

If you're programmatically creating new labels for your repository, they would all be boring and gray. This Action automatically adds nice, soft colors for all your repository labels that are gray.

You can run this Action after updating labels:

```yaml
name: Test CI
on:
  push:
    branches: [main]
jobs:
  test:
    name: Something that updates labels
    runs-on: ubuntu-18.04
    steps:
      # Do something with labels
      # Then run this Action
      - name: Color all labels
        uses: AnandChowdhary/color-labels-action@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 📄 License

- Code: [MIT](./LICENSE) © [Anand Chowdhary](https://anandchowdhary.com)
- "GitHub" is a trademark of GitHub, Inc.
