interface GetClassesParams extends Array<string> {}

export const getClasses = (classes: GetClassesParams): string =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();