export function formatHeight(height: number): string {
  const heightInMeters = height / 10;
  return `${heightInMeters.toFixed(1)}m`;
}

export function formatWeight(weight: number): string {
  const weightInKg = weight / 10;
  return `${weightInKg.toFixed(1)}kg`;
}
