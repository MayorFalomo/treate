 export const handleDisplay = (id: string | number, itemOne: string, itemTwo?: string): string => {
    const res = Number(id) % 2 ? itemOne : itemTwo;
    return res ?? itemOne;
};
  
export const randomNumber = (a: number, b: number): number => {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}