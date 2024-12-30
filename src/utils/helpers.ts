export const calculateProgressPercentage = (
  elapsedTime: number,
  totalDuration: number
): number => {
  return Math.min((elapsedTime / totalDuration) * 100, 100);
};
