type TTest = {
    id: number;
    name: string;
};


interface ITest {
    id: number,
    name: string,
}

export enum TestEnum {
    NOT_STARTED = "NOT_STARTED", // bu oldugu kimi gelmelidir
  }

export type { TTest, ITest }