

export function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola';
}


export function CustomDecorator() {
  // @ts-ignore
  return (proto: any, prop: string) => {


  };
}
