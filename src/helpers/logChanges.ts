export const logChanges = (name: string, prev: any, next: any) => {
  const changes: Record<string, { from: any; to: any }> = {};
  const allKeys = new Set([...Object.keys(prev), ...Object.keys(next)]);

  allKeys.forEach((key) => {
    if (prev[key] !== next[key]) {
      changes[key] = { from: prev[key], to: next[key] };
    }
  });

  // this is a special case for the "match" prop in react-router
  const changeKeys = Object.keys(changes);
  if (
    name === "Anonymous" &&
    changeKeys.length === 1 &&
    changeKeys[0] === "match"
  ) {
    return;
  }

  if (Object.keys(changes).length > 0) {
    console.log(`[WDYR] ${name}`, changes);
  }
};
