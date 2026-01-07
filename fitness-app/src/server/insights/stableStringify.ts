export function stableStringify(value: unknown): string {
  return JSON.stringify(sortValue(value));
}

function sortValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(sortValue);
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
      .map(([key, val]) => [key, sortValue(val)]);

    return Object.fromEntries(entries);
  }

  return value;
}
