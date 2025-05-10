export const logChanges = (name: string, prev: any, next: any) => {
  const changes: Record<string, { from: any; to: any }> = {};
  const allKeys = new Set([...Object.keys(prev), ...Object.keys(next)]);

  allKeys.forEach((key) => {
    if (prev[key] !== next[key]) {
      changes[key] = { from: prev[key], to: next[key] };
    }
  });

  const changeKeys = Object.keys(changes);

  let color = "";
  if (changeKeys.length <= 4) {
    color = "#ffcc80";
  } else if (changeKeys.length <= 6) {
    color = "#ff9800";
  } else {
    color = "#e65100";
  }

  // this is a special case for the "match" prop in react-router
  if (
    name === "Anonymous" &&
    changeKeys.length === 1 &&
    changeKeys[0] === "match"
  ) {
    return;
  }

  if (changeKeys.length > 0) {
    console.log(
      `%c[WDYR] ${name} (${changeKeys.length} changed)`,
      `color: ${color}; font-weight: bold;`,
      changes
    );
  } else {
    // No actual changes but re-rendered
    console.log(
      `%c[WDYR] ${name} re-rendered with same props`,
      "color: red; font-weight: bold;"
    );
  }
};
