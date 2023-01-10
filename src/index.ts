const defaultAwesomeFunction = (name: string): string => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

const awesomeFunction = (): string => 'I am just an Awesome Function';

export default defaultAwesomeFunction;

export { awesomeFunction };
