import { debug, getInput, setFailed, setOutput } from "@actions/core";
import { getOctokit } from "@actions/github";
import randomColor from "randomcolor";

const token = getInput("token") || process.env.GH_PAT || process.env.GITHUB_TOKEN;

export const run = async () => {
  if (!token) throw new Error("GitHub token not found");
  const octokit = getOctokit(token);
  const owner = (process.env.GITHUB_REPOSITORY || "").split("/")[0];
  const repo = (process.env.GITHUB_REPOSITORY || "").split("/")[1];
  debug(`Got repo ${owner}/${repo}`);
  const labels = await octokit.paginate(octokit.rest.issues.listLabelsForRepo, { owner, repo });
  for (const label of labels) {
    if (label.color !== "ededed") {
      debug(`Skipping "${label.name}" because it's not gray`);
      continue;
    }
    const color = randomColor({ luminosity: "light" }).replace("#", "");
    debug(`Adding color ${color} to "${label.name}"`);
    await octokit.rest.issues.updateLabel({
      owner,
      repo,
      name: label.name,
      color,
    });
  }
  setOutput("labels-count", labels.length);
};

run()
  .then(() => {})
  .catch((error) => {
    console.error("ERROR", error);
    setFailed(error.message);
  });
