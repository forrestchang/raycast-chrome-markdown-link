import { Clipboard, closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

function createChromeMarkdownLink(): string {
  return `
  tell application "Google Chrome"
    set tab_link to (get URL of active tab of first window)
    set tab_title to (get title of active tab of first window)
    set md_link to ("[" & tab_title & "]" & "(" & tab_link & ")")
  end tell
  `;
}

export default async function main() {
  await closeMainWindow();
  const script = createChromeMarkdownLink();
  const result = await runAppleScript(script);
  await Clipboard.copy(result);
}
